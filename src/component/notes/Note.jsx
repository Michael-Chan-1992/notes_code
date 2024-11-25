import clsx from "clsx";
import TagsList from "../TagsList";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function Note({ title, content, tags, color, id }) {
  const { setModal } = useContext(ModalContext);

  return (
    <div
      className={clsx(
        "flex w-60 flex-col gap-3 rounded-lg border p-3 shadow-md hover:shadow-zinc-950",
        color === "transparent"
          ? "border-neutral-500 bg-transparent"
          : `border-transparent ${color}`,
      )}
      onClick={() => setModal({ type: "note", noteId: id })}
    >
      {title && <div className="text-sm font-bold">{title}</div>}
      {content && <div>{content}</div>}
      {tags.length > 0 && <TagsList tags={tags} />}
      {!title && !content && tags.length === 0 && (
        <p className="text-xl text-neutral-400">Blank note</p>
      )}
    </div>
  );
}
