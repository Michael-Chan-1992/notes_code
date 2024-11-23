import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { VisibilityContext } from "../context/VisibilityContext";
import EntryForm from "./EntryForm";
import { NewEntryContext } from "../context/NewEntryContext";

export default function EntrySection() {
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { addNote } = useContext(NotesContext);
  const { fullEntryVisible, setAllNotVisible, setFullEntryVisible } =
    useContext(VisibilityContext);

  const isEmptyEntry = !newEntry.title && !newEntry.content;

  function handleSubmit(e) {
    e.preventDefault();
    setAllNotVisible();
    setNewEntry(defaultEntry);

    if (isEmptyEntry) return;

    addNote(newEntry);
  }

  return (
    <section
      className="flex items-center justify-center py-5 *:shadow-md *:shadow-zinc-950"
      onClick={handleSubmit}
    >
      {fullEntryVisible ? (
        <EntryForm handleSubmit={handleSubmit} isEmptyEntry={isEmptyEntry} />
      ) : (
        <div
          className="w-[500px] rounded-lg border bg-transparent px-4 py-2 text-zinc-300 hover:cursor-text"
          onClick={(e) => {
            e.stopPropagation();
            setFullEntryVisible(true);
          }}
        >
          Take a note...
        </div>
      )}
    </section>
  );
}
