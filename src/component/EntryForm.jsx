import clsx from "clsx";
import { useContext, useRef } from "react";
import { VisibilityContext } from "../context/VisibilityContext";
import { NewEntryContext } from "../context/NewEntryContext";
import NotesOptions from "./NotesOptions";
import useExpandHeight from "../hook/useExpandHeight";

export default function EntryForm({ handleSubmit, isEmptyEntry }) {
  const { setOptionsNotVisible } = useContext(VisibilityContext);

  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { title, content } = newEntry;

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
        newEntry.color === "transparent"
          ? "border-zinc-300 bg-transparent"
          : `border-transparent ${newEntry.color}`,
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
      <ul className="flex h-7 gap-2">
        {newEntry.tags.map((tag) => (
          <li key={tag} className="rounded-lg border p-1 text-xs">
            {tag}
          </li>
        ))}
      </ul>
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
