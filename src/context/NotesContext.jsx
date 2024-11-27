import { createContext, useState } from "react";

export const NotesContext = createContext();

const defaultNotes = [
  {
    id: 1,
    title: "Title 1",
    content: "micha@DESKTOP-IU9BHTN MINGW64 ~/WebDev/keep (feature/note-edit)",
    tags: ["Personal", "School"],
    color: "red",
  },
  {
    id: 2,
    title: "Title 2",
    content: "micha@DESKTOP-IU9BHTN MINGW64 ~/WebDev/keep (feature/note-edit)",
    tags: ["Work"],
    color: "transparent",
  },
  {
    id: 3,
    title: "Title 3",
    content: "micha@DESKTOP-IU9BHTN MINGW64 ~/WebDev/keep (feature/note-edit)",
    tags: ["Family"],
    color: "blue",
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

  function deleteNote(entryToDelete) {
    setNotes(notes.filter((note) => note.id !== entryToDelete.id));
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
      value={{
        notes,
        setNotes,
        addNote,
        updateNote,
        deleteNote,
        updateNotesTags,
        removeNotesTags,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
