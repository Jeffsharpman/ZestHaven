import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollTo = useCallback((targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navHeight = 80;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, []);

  const handleAnchorClick = useCallback(
    (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const targetId = href.slice(1);
      if (!targetId) return;

      e.preventDefault();
      scrollTo(targetId);

      const url = new URL(window.location);
      url.hash = targetId;
      window.history.pushState({}, "", url);
    },
    [scrollTo]
  );

  return { scrollTo, handleAnchorClick };
};

export default useSmoothScroll;
