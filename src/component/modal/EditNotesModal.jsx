import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { NewEntryContext } from "../../context/NewEntryContext";
import EntryForm from "../entry/EntryForm";
import { VisibilityContext } from "../../context/VisibilityContext";
import { ModalContext } from "../../context/ModalContext";

export default function EditNotesModal() {
  const { updateNote } = useContext(NotesContext);
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { setOptionsNotVisible } = useContext(VisibilityContext);
  const { setModal } = useContext(ModalContext);

  function handleSubmit(e) {
    e.preventDefault();
    setOptionsNotVisible();
    setNewEntry(defaultEntry);

    updateNote(newEntry);
    setModal({ type: "none" });
  }

  return <EntryForm handleSubmit={handleSubmit} isEmptyEntry={false} />;
}
