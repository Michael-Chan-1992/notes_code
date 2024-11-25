import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState("none");
  const [noteId, setNoteId] = useState();

  return (
    <ModalContext.Provider value={{ modal, setModal, noteId, setNoteId }}>
      {children}
    </ModalContext.Provider>
  );
}
