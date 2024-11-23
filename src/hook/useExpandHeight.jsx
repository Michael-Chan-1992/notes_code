import { useEffect } from "react";

export default function useExpandHeight(ref) {
  useEffect(() => {
    const target = ref.current;
    target.focus();
    target.addEventListener("input", adjustHeight);

    function adjustHeight() {
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }

    return () => target.removeEventListener("input", adjustHeight);
  }, []);
}
