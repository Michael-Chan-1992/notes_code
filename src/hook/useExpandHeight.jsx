import { useEffect, useRef } from "react";

export default function useExpandHeight() {
  const elementRef = useRef();

  useEffect(() => {
    const target = elementRef.current;

    target.focus();

    function adjustHeight() {
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }

    adjustHeight();

    target.addEventListener("input", adjustHeight);

    return () => target.removeEventListener("input", adjustHeight);
  }, []);

  return { elementRef };
}
