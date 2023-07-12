import { useEffect } from "react";

export const TorchEffect = () => {
  const update = (e) => {
    const x =
      e.clientX ||
      (e.touches && e.touches.length > 0 && e.touches[0].clientX) ||
      0;
    const y =
      e.clientY ||
      (e.touches && e.touches.length > 0 && e.touches[0].clientY) ||
      0;

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  };

  useEffect(() => {
    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    return () => {
      document.removeEventListener("mousemove", update);
      document.removeEventListener("touchmove", update);
    };
  }, []);

  return null;
};
