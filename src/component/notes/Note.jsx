import clsx from "clsx";
import TagsList from "../TagsList";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { COLORS } from "../entry/ColorPicker";
import { NewEntryContext } from "../../context/NewEntryContext";
import { NotesContext } from "../../context/NotesContext";
import { VisibilityContext } from "../../context/VisibilityContext";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Note(note) {
  const { modal, setModal } = useContext(ModalContext);
  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { addNote } = useContext(NotesContext);
  const { setAllNotVisible } = useContext(VisibilityContext);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: note.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 9999 : 0,
    opacity: isDragging ? 0.9 : 1,
    cursor: isDragging ? "move" : "default",
  };

  const { title, content, tags, color, id } = note;

  const isEmptyEntry = !newEntry.title && !newEntry.content;

  function handleClick(e) {
    e.stopPropagation();
    setAllNotVisible();

    setModal({ type: "note", noteId: id });
    setNewEntry(note);

    if (!isEmptyEntry) {
      addNote(newEntry);
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(
        "flex size-60 flex-col gap-3 rounded-lg border p-3 shadow-md hover:shadow-zinc-950",
        modal?.noteId === id && "invisible",
        COLORS[color],
        color === "transparent" ? "border-neutral-500" : `border-transparent`,
      )}
      onClick={handleClick}
    >
      {title && <div className="text-sm font-bold">{title}</div>}
      {content && <div className="break-words">{content}</div>}
      {!title && !content && (
        <p className="text-xl text-neutral-400">Blank note</p>
      )}
      {tags.length > 0 && <TagsList tags={tags} />}
    </div>
  );
}
