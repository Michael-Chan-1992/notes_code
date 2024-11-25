import { createContext, useState } from "react";

export const NotesContext = createContext();

const defaultNotes = [
  {
    id: 1,
    title: "Title 1",
    content: "micha@DESKTOP-IU9BHTN MINGW64 ~/WebDev/keep (feature/note-edit)",
    tags: ["Personal"],
    color: "transparent",
  },
];

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState(defaultNotes);

  function addNote(newEntry) {
    const newNote = { ...newEntry, id: Date.now() };
    setNotes([...notes, newNote]);
  }

  function updateNote(updatedEntry) {
    setNotes(
      notes.map((note) => (note.id === updatedEntry.id ? updatedEntry : note)),
    );
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
      value={{ notes, addNote, updateNote, updateNotesTags, removeNotesTags }}
    >
      {children}
    </NotesContext.Provider>
  );
}
