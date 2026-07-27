import { useEffect } from "react";

// 整屏吸附滚动：一次滚动手势（不论滚轮触发多少次事件）只翻一个模块。
// 触屏设备与窄屏保持原生滚动不受影响。
const LOCK_MS = 1100; // 一次翻页后的冷却时间，吞掉触控板的惯性事件
const MIN_DELTA = 15; // 忽略过小的滚动量（惯性衰减尾巴）

const useSectionSnap = () => {
  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    let locked = false;

    const snapTo = (dir) => {
      const sections = Array.from(document.querySelectorAll("[data-snap]"));
      if (!sections.length) return;

      const vh = window.innerHeight;
      const y = window.scrollY;
      const tops = sections.map((el) =>
        Math.round(el.getBoundingClientRect().top + y)
      );
      const bottoms = sections.map((el, i) => tops[i] + el.offsetHeight);

      let current = 0;
      tops.forEach((t, i) => {
        if (y >= t - vh * 0.4) current = i;
      });

      // 模块比窗口高时：先在模块内分页滚动，滚到边缘再切换模块
      let target;
      if (dir > 0) {
        const maxY = bottoms[current] - vh;
        if (y < maxY - 8) {
          target = Math.min(y + vh * 0.85, maxY);
        } else {
          target = tops[Math.min(sections.length - 1, current + 1)];
        }
      } else {
        if (y > tops[current] + 8) {
          target = Math.max(y - vh * 0.85, tops[current]);
        } else {
          const prev = Math.max(0, current - 1);
          // 回看上一模块：若它也超高，先落在其底部对齐处
          target = Math.max(tops[prev], bottoms[prev] - vh);
        }
      }

      locked = true;
      window.scrollTo({ top: target, behavior: "smooth" });
      setTimeout(() => {
        locked = false;
      }, LOCK_MS);
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return; // 不拦截捏合/Ctrl+滚轮缩放
      e.preventDefault();
      if (locked) return;
      if (Math.abs(e.deltaY) < MIN_DELTA) return;
      snapTo(e.deltaY > 0 ? 1 : -1);
    };

    const onKey = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        if (!locked) snapTo(1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        if (!locked) snapTo(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
};

export default useSectionSnap;
