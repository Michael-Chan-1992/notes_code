import { createContext, useState } from "react";

export const TagsContext = createContext();

const DEFAULT = ["Personal", "Work", "Family", "School"];

export default function TagsProvider({ children }) {
  const [tags, setTags] = useState(DEFAULT);
  const [currentFilterTag, setCurrentFilterTag] = useState("All");

  return (
    <TagsContext.Provider
      value={{ tags, setTags, currentFilterTag, setCurrentFilterTag }}
    >
      {children}
    </TagsContext.Provider>
  );
}
