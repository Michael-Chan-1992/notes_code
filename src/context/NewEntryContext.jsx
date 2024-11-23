import { createContext, useState } from "react";

export const NewEntryContext = createContext();

const defaultEntry = { title: "", content: "", tags: [], color: "transparent" };

export default function NewEntryProvider({ children }) {
  const [newEntry, setNewEntry] = useState(defaultEntry);

  return (
    <NewEntryContext.Provider value={{ newEntry, setNewEntry, defaultEntry }}>
      {children}
    </NewEntryContext.Provider>
  );
}
