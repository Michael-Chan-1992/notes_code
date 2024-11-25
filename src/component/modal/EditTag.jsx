import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import { TAGS_ENUM, TagsContext } from "../../context/TagsContext";
import { NotesContext } from "../../context/NotesContext";
import Button from "../Button";

export default function editTag({ currentTag }) {
  const [tempTag, setTempTag] = useState(currentTag);
  const [currentTagState, setCurrentTagState] = useState("idle");

  const {
    tags,
    updateTags,
    removeTags,
    currentFilterTag,
    setCurrentFilterTag,
  } = useContext(TagsContext);
  const { updateNotesTags, removeNotesTags } = useContext(NotesContext);

  const currentTagRef = useRef();

  function startEdit() {
    setCurrentTagState("editing");
    currentTagRef.current.focus();
  }

  function handleConfirm() {
    setCurrentTagState("idle");
    if (tags.includes(tempTag)) return;
    updateTags(currentTag, tempTag);
    updateNotesTags(currentTag, tempTag);
    if (currentFilterTag !== currentTag) return;
    setCurrentFilterTag(tempTag);
  }

  function handleDelete(tagToRemove) {
    if (!confirm("Deleting tag removes corresponding tag from notes.")) return;
    removeNotesTags(tagToRemove);
    removeTags(tagToRemove);

    if (currentFilterTag !== currentTag) return;
    setCurrentFilterTag(TAGS_ENUM.all);
  }

  const editButton = (
    <Button onClick={startEdit} title="Rename">
      ✏️
    </Button>
  );

  const confirmButton = (
    <button
      onClick={handleConfirm}
      className={clsx(
        "size-9 shrink-0 rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-10",
        !tempTag && "invisible",
      )}
      title="Confirm"
    >
      ✔️
    </button>
  );

  return (
    <li className="group flex items-center gap-3" key={currentTag}>
      <button className="size-9 shrink-0 group-hover:hidden">🏷️</button>
      <button
        onClick={() => handleDelete(currentTag)}
        title="Delete"
        className="hidden size-9 shrink-0 rounded-full hover:cursor-pointer hover:bg-white hover:bg-opacity-10 group-hover:block"
      >
        🗑️
      </button>
      <input
        ref={currentTagRef}
        placeholder="Enter tag name"
        value={tempTag}
        onClick={() => setCurrentTagState("editing")}
        onChange={(e) => setTempTag(e.target.value)}
        className="min-w-0 border-b border-transparent bg-transparent placeholder:text-neutral-300 focus:border-neutral-500 focus:outline-none"
      />
      {currentTagState === "idle" ? editButton : confirmButton}
    </li>
  );
}
