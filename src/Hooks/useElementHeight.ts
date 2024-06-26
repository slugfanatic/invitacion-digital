import { useEffect, useRef, useState } from "react";

const useElementHeight = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState<number | null>(null);

  const handleResize = () => {
    if (elementRef.current) {
      setElementHeight(elementRef.current.getBoundingClientRect().height);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { elementRef, elementHeight };
};

export default useElementHeight;
