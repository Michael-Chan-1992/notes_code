import { useContext, useEffect } from "react";
import { NotesContext } from "../../context/NotesContext";
import { NewEntryContext } from "../../context/NewEntryContext";
import EntryForm from "../entry/EntryForm";
import { VisibilityContext } from "../../context/VisibilityContext";
import { ModalContext } from "../../context/ModalContext";

export default function EditNotesModal({ noteId }) {
  const { notes, updateNote } = useContext(NotesContext);
  const { newEntry, setNewEntry, defaultEntry } = useContext(NewEntryContext);
  const { setAllNotVisible } = useContext(VisibilityContext);
  const { setModal } = useContext(ModalContext);

  function handleSubmit(e) {
    e.preventDefault();
    setAllNotVisible();
    setNewEntry(defaultEntry);

    updateNote(newEntry);
    setModal({ type: "none" });
  }

  useEffect(() => {
    setNewEntry(notes.find((note) => note.id === noteId));
  }, []);

  return <EntryForm handleSubmit={handleSubmit} isEmptyEntry={false} />;
}
