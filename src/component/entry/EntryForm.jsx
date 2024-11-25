import clsx from "clsx";
import { useContext, useRef } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";
import { NewEntryContext } from "../../context/NewEntryContext";
import TagsList from "../TagsList";
import useExpandHeight from "../../hook/useExpandHeight";
import NotesOptions from "./NotesOptions";

export default function EntryForm({ handleSubmit, isEmptyEntry }) {
  const { setOptionsNotVisible } = useContext(VisibilityContext);

  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { title, content, tags, color } = newEntry;

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

  return (
    <form
      className={clsx(
        "flex w-[500px] flex-col gap-5 rounded-lg border px-4 py-2",
        "*:bg-transparent *:outline-none *:placeholder:text-neutral-400",
        color === "transparent"
          ? "border-neutral-500 bg-transparent"
          : `border-transparent ${color}`,
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
        className="resize-none text-sm"
        value={content}
        onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
        ref={contentTextArea}
      />
      <TagsList tags={tags} />
      <div className="flex">
        <NotesOptions />
        <button
          type="submit"
          className="ml-auto rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10"
        >
          {isEmptyEntry ? "Close" : "Save"}
        </button>
      </div>
    </form>
  );
}
