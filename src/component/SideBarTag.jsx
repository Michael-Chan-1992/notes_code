import clsx from "clsx";
import { useContext } from "react";
import { TagsContext } from "../context/TagsContext";

export default function SideBarTag({ tag, isCurrentTag, icon }) {
  const { setCurrentFilterTag } = useContext(TagsContext);
  return (
    <li
      className={clsx(
        "sidebar-transition flex items-center rounded-full bg-opacity-30 p-2 text-2xl text-neutral-300 transition-all",
        "hover:cursor-pointer group-hover:rounded-s-none",
        isCurrentTag ? "bg-yellow-500" : "hover:bg-zinc-700",
      )}
      onClick={() => setCurrentFilterTag(tag)}
    >
      <span>{icon}</span>
      {/* <span className="ml-4 hidden text-sm group-hover:block"> */}
      <span className="sidebar-transition-delay ml-4 w-0 overflow-hidden text-sm group-hover:w-56">
        {tag}
      </span>
    </li>
  );
}
