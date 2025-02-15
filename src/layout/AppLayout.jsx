import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { VisibilityContext } from "../context/VisibilityContext";
import { NewEntryContext } from "../context/NewEntryContext";
import { ModalContext } from "../context/ModalContext";

export default function AppLayout({ children }) {
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { addNote, updateNote } = useContext(NotesContext);
  const { setAllNotVisible } = useContext(VisibilityContext);
  const { modal, setModal } = useContext(ModalContext);

  const isEmptyEntry = !newEntry.title && !newEntry.content;

  function globalClickCatch() {
    setAllNotVisible();

    if (modal.type !== "none") {
      if (modal.type === "note") {
        updateNote(newEntry);
      }
      setNewEntry(defaultEntry);
      setModal({ type: "none" });
      return;
    }

    setNewEntry(defaultEntry);
    if (isEmptyEntry) return;

    addNote(newEntry);
  }
  return (
    <div onClick={globalClickCatch} className="bg-zinc-800 text-neutral-300">
      {children}
    </div>
  );
}
