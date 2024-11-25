import { createContext, useState } from "react";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function addNote(newEntry) {
    const newNote = { ...newEntry, id: notes.length + 1 };
    setNotes([...notes, newNote]);
  }

  function updateNotesTags(oldName, newName) {
    setNotes(
      notes.map((note) => ({
        ...note,
        tags: note.tags.map((tag) => (tag === oldName ? newName : tag)),
      })),
    );
  }

  function removeNotesTags(tagToRemove) {
    setNotes(
      notes.map((note) => ({
        ...note,
        tags: note.tags.filter((tag) => tag !== tagToRemove),
      })),
    );
  }

  return (
    <NotesContext.Provider
      value={{ notes, addNote, updateNotesTags, removeNotesTags }}
    >
      {children}
    </NotesContext.Provider>
  );
}
