import { useEffect, useRef, useState } from "react";

// 画布不在视口内时暂停 WebGL 渲染循环（frameloop = never），
// 避免三个 3D 画布同时全程 60fps 渲染拖垮滚动性能。
const useFrameloopInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView ? "always" : "never"];
};

export default useFrameloopInView;
