import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Preload,
  useAnimations,
  useFBX,
  useGLTF,
} from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

import CanvasLoader from "../Loader";
import useFrameloopInView from "../../hooks/useFrameloopInView";

// 程序员人物（亚洲面孔）+ 坐姿敲代码动画。
// 想换成自己的形象：到 readyplayer.me 免费捏一个（可选格子衫、牛仔裤），
// 导出 glb 覆盖 public/models/avatar.glb 即可，其他代码不用动。
const CodingAvatar = (props) => {
  const group = useRef();

  const { scene } = useGLTF("./models/avatar.glb", "./draco/");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { animations: typingAnimation } = useFBX("./models/typing.fbx");

  // 动画轨道名与骨骼名对齐：
  // 这份 mixamo FBX 的轨道名不带前缀（如 "Hips.quaternion"），
  // 而模型骨骼可能带 mixamorig / mixamorig2 等前缀，这里自动补齐。
  // 同时丢弃位移轨道（FBX 与 glb 单位不一致会把模型拉飞），
  // 坐姿形态由旋转轨道呈现，整体高度在场景里手动摆放。
  const clip = useMemo(() => {
    let prefix = "";
    clone.traverse((o) => {
      if (o.isBone && !prefix) {
        const m = o.name.match(/^(mixamorig\d*)Hips$/);
        if (m) prefix = m[1];
      }
    });

    const c = typingAnimation[0].clone();
    c.name = "Typing";
    c.tracks = c.tracks
      // 位移轨道只保留髋部（坐下时的下沉靠它），其余位移丢弃
      .filter(
        (t) => !t.name.endsWith(".position") || t.name.startsWith("Hips")
      )
      .map((t) => {
        // Armature 是根节点轨道（携带骨架方向补偿），保持原名；
        // 其余骨骼轨道按需补前缀
        if (
          !t.name.startsWith("Armature") &&
          prefix &&
          !t.name.startsWith(prefix)
        ) {
          t.name = prefix + t.name;
        }
        return t;
      });
    // FBX 位移单位是厘米，模型是米，做一次换算
    c.tracks.forEach((t) => {
      if (t.name.endsWith(".position")) {
        const max = Math.max(...t.values.map((v) => Math.abs(v)));
        if (max > 10) {
          t.values = t.values.map((v) => v * 0.01);
        }
      }
    });
    return c;
  }, [typingAnimation, clone]);

  const { actions } = useAnimations([clip], group);

  useEffect(() => {
    if (actions["Typing"]) actions["Typing"].reset().fadeIn(0.5).play();
    return () => actions["Typing"]?.fadeOut(0.5);
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
    </group>
  );
};

// 简约的桌子 + 笔记本电脑 + 圆凳，配色与整站浅色主题一致
const Desk = (props) => {
  return (
    <group {...props}>
      {/* 桌面 */}
      <mesh position={[0, 0.72, 0]} castShadow>
        <boxGeometry args={[1.5, 0.06, 0.72]} />
        <meshStandardMaterial color='#C9B99A' roughness={0.6} />
      </mesh>
      {/* 桌腿 */}
      {[
        [-0.68, 0.36, -0.28],
        [0.68, 0.36, -0.28],
        [-0.68, 0.36, 0.28],
        [0.68, 0.36, 0.28],
      ].map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.06, 0.72, 0.06]} />
          <meshStandardMaterial color='#8A7A5E' roughness={0.7} />
        </mesh>
      ))}
      {/* 笔记本：整体朝向使用者（屏幕在远端、背对镜头，键盘朝人） */}
      <group position={[0, 0, -0.02]} rotation-y={Math.PI}>
        {/* 底座键盘 */}
        <mesh position={[0, 0.77, 0.05]}>
          <boxGeometry args={[0.6, 0.025, 0.4]} />
          <meshStandardMaterial
            color='#3A362F'
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
        {/* 屏幕（向远离使用者的方向翻开） */}
        <group position={[0, 0.78, -0.15]} rotation={[-Math.PI / 7, 0, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.6, 0.4, 0.02]} />
            <meshStandardMaterial
              color='#3A362F'
              roughness={0.4}
              metalness={0.3}
            />
          </mesh>
          {/* 亮起的屏幕，面向使用者 */}
          <mesh position={[0, 0.2, 0.012]}>
            <planeGeometry args={[0.54, 0.34]} />
            <meshStandardMaterial
              color='#DFF3EC'
              emissive='#7FD6C2'
              emissiveIntensity={0.55}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
};

const Stool = (props) => {
  return (
    <group {...props}>
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.24, 0.26, 0.06, 24]} />
        <meshStandardMaterial color='#C9B99A' roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 0.4, 16]} />
        <meshStandardMaterial color='#8A7A5E' roughness={0.7} />
      </mesh>
    </group>
  );
};

const DeveloperCanvas = () => {
  const [wrapRef, frameloop] = useFrameloopInView();

  return (
    <div ref={wrapRef} className='w-full h-full'>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        camera={{ position: [1.6, 0.6, 4.4], fov: 32 }}
      >
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <directionalLight position={[-4, 3, -3]} intensity={0.35} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.1}
          target={[0, -0.35, 0]}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 4}
        />

        <group position={[0, -1.15, 0]}>
          {/* 坐姿打字的人物：面向 +z，桌子摆在身前 */}
          <CodingAvatar scale={1.15} position={[0, 0, -0.02]} />
          <Desk position={[0, 0, 0.55]} scale={1.05} />
          <Stool position={[0, 0, -0.18]} />
          <ContactShadows
            position={[0, 0.01, 0.2]}
            opacity={0.35}
            blur={2.2}
            scale={7}
            far={2.5}
          />
        </group>
      </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default DeveloperCanvas;

useGLTF.preload("./models/avatar.glb", "./draco/");
