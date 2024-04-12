import { useEffect, useRef, useState } from "react";

const useElementHeight = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const prevHeightRef = useRef<number | null>(null);
  const [elementHeight, setElementHeight] = useState<number | null>(null);

  const handleResize = () => {
    if (elementRef.current) {
      const newHeight = elementRef.current.getBoundingClientRect().height;
      if (newHeight !== prevHeightRef.current) {
        setElementHeight(newHeight);
        prevHeightRef.current = newHeight;
      }
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return { elementRef, elementHeight };
};

export default useElementHeight;
