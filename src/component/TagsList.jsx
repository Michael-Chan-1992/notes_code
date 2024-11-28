import { useState, useEffect, useRef } from "react";

export default function TagsList({ tags }) {
  const ulRef = useRef(null);
  const [visibleTags, setVisibleTags] = useState([]);
  const [overflowTags, setOverflowTags] = useState(0);

  const gap = 4;
  const padding = 16;

  useEffect(() => {
    const checkOverflow = () => {
      const ulWidth = ulRef.current.offsetWidth;
      const overflowTagWidth = calculateOverflowTagWidth();
      let totalWidth = 0;
      let visible = [];
      let remaining = 0;

      for (let i = 0; i < tags.length; i++) {
        const li = document.createElement("li");
        li.textContent = tags[i];
        ulRef.current.appendChild(li);

        totalWidth += li.offsetWidth + padding;

        ulRef.current.removeChild(li);
        if (i < tags.length - 1) {
          totalWidth += gap;
        }

        if (totalWidth <= ulWidth) {
          visible.push(tags[i]);
        } else {
          remaining = tags.length - i;
          break;
        }
      }

      if (remaining == 0) {
        setVisibleTags(visible);
        setOverflowTags(remaining);
        return;
      }

      totalWidth = 0;
      visible = [];
      remaining = 0;

      for (let i = 0; i < tags.length; i++) {
        const li = document.createElement("li");
        li.textContent = tags[i];
        ulRef.current.appendChild(li);

        totalWidth += li.offsetWidth + padding;

        ulRef.current.removeChild(li);
        if (i < tags.length - 1) {
          totalWidth += gap;
        }

        if (totalWidth <= ulWidth - overflowTagWidth) {
          visible.push(tags[i]);
        } else {
          remaining = tags.length - i;
          break;
        }
      }

      setVisibleTags(visible);
      setOverflowTags(remaining);
    };

    const calculateOverflowTagWidth = () => {
      const padding = 8;
      const li = document.createElement("li");
      li.textContent = `+${tags.length}`;
      ulRef.current.appendChild(li);
      const width = li.offsetWidth + padding;
      ulRef.current.removeChild(li);
      return width;
    };

    checkOverflow();
  }, [tags]);

  return (
    <ul
      className="flex min-h-[26px] gap-1 overflow-hidden *:border *:border-zinc-400 *:text-xs"
      ref={ulRef}
    >
      {visibleTags.map((tag) => (
        <li
          key={tag}
          className="min-w-9 shrink-0 rounded-xl px-2 py-1 text-center"
        >
          {tag}
        </li>
      ))}
      {overflowTags > 0 && (
        <li className="p-1" title={tags.slice(-overflowTags).join(", ")}>
          +{overflowTags}
        </li>
      )}
    </ul>
  );
}
