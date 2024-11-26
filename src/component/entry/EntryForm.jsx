import clsx from "clsx";
import { useContext, useRef } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";
import { NewEntryContext } from "../../context/NewEntryContext";
import TagsList from "../TagsList";
import useExpandHeight from "../../hook/useExpandHeight";
import NotesOptions from "./NotesOptions";
import { COLORS } from "./ColorPicker";
import { ModalContext } from "../../context/ModalContext";
import Button from "../Button";
import { NotesContext } from "../../context/NotesContext";

export default function EntryForm({ handleSubmit, isEmptyEntry }) {
  const { setOptionsNotVisible } = useContext(VisibilityContext);
  const { modal, setModal } = useContext(ModalContext);
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { title, content, tags, color } = newEntry;
  const { deleteNote } = useContext(NotesContext);

  const contentTextArea = useRef();
  useExpandHeight(contentTextArea);

  function handleFormClick(e) {
    e.stopPropagation();
    setOptionsNotVisible();
  }

  function handleTitleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      contentTextArea.current.focus();
    }
  }

  function handleDelete() {
    if (!confirm("Delete current note?")) return;
    deleteNote(newEntry);
    setNewEntry(defaultEntry);
    setModal({ type: "none" });
  }

  const saveButton = (
    <button
      type="submit"
      className="rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10"
    >
      {isEmptyEntry ? "Close" : "Save"}
    </button>
  );

  const deleteButton = (
    <Button onClick={handleDelete} title="Delete">
      🗑️
    </Button>
  );

  return (
    <form
      className={clsx(
        "flex w-[500px] flex-col gap-5 rounded-lg border px-4 py-2",
        "*:bg-transparent *:outline-none *:placeholder:text-neutral-400",
        COLORS[color],
        color === "transparent" ? "border-neutral-500" : `border-transparent`,
      )}
      onSubmit={handleSubmit}
      onClick={handleFormClick}
    >
      <input
        placeholder="Title"
        className="font-bold"
        value={title}
        onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
        onKeyDown={handleTitleEnter}
      />

      <textarea
        placeholder="Take a note..."
        className="h-auto resize-none text-sm"
        value={content}
        onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
        ref={contentTextArea}
      />
      <TagsList tags={tags} />
      <div className="flex justify-between">
        <NotesOptions />
        <div>
          {modal.type === "note" && deleteButton}
          {saveButton}
        </div>
      </div>
    </form>
  );
}
