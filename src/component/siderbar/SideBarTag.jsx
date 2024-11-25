import clsx from "clsx";
import { useContext } from "react";
import { TagsContext, TAGS_ENUM } from "../../context/TagsContext";
import { ModalContext } from "../../context/ModalContext";

export default function SideBarTag({ tag, isCurrentTag, icon }) {
  const { setCurrentFilterTag } = useContext(TagsContext);
  const { setModal } = useContext(ModalContext);
  function handleClick() {
    if (tag === TAGS_ENUM.edit) {
      setModal({ type: "tags" });
    } else {
      setCurrentFilterTag(tag);
    }
  }
  return (
    <li
      className={clsx(
        "sidebar-transition flex items-center rounded-full bg-opacity-20 p-2 text-2xl transition-all",
        "hover:cursor-pointer group-hover:rounded-s-none",
        isCurrentTag ? "bg-amber-600" : "hover:bg-neutral-700",
      )}
      onClick={handleClick}
    >
      <span>{icon}</span>
      <span className="sidebar-transition-delay ml-4 overflow-hidden whitespace-nowrap text-sm group-hover:overflow-ellipsis">
        {tag}
      </span>
    </li>
  );
}
