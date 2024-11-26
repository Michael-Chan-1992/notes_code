import { useEffect } from "react";

export default function useExpandHeight(ref) {
  useEffect(() => {
    const target = ref.current;

    target.focus();

    function adjustHeight() {
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }

    adjustHeight();

    target.addEventListener("input", adjustHeight);

    return () => target.removeEventListener("input", adjustHeight);
  }, []);
}
