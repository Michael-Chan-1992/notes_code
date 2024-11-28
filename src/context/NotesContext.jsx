import { createContext, useEffect, useState } from "react";
import { parsedNotes } from "../localStorage";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState(parsedNotes);

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

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
