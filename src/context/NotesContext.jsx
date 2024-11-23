import { createContext, useState } from "react";

export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function addNote(newEntry) {
    const newNote = { ...newEntry, id: notes.length + 1 };
    setNotes([...notes, newNote]);
  }

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}
