import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { VisibilityContext } from "../context/VisibilityContext";
import { NewEntryContext } from "../context/NewEntryContext";
import { ModalContext } from "../context/ModalContext";

export default function AppLayout({ children }) {
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { addNote } = useContext(NotesContext);
  const { setAllNotVisible } = useContext(VisibilityContext);
  const { modal, setModal } = useContext(ModalContext);

  const isEmptyEntry = !newEntry.title && !newEntry.content;

  function handleSubmit(e) {
    e.preventDefault();
    setAllNotVisible();
    setNewEntry(defaultEntry);

    if (modal.type !== "none") {
      setModal({ type: "none" });
      return;
    }

    if (isEmptyEntry) return;

    addNote(newEntry);
  }
  return (
    <div onClick={handleSubmit} className="bg-neutral-800 text-neutral-300">
      {children}
    </div>
  );
}
