import { createContext, useState } from "react";

export const TagsContext = createContext();

const DEFAULT = ["Personal", "Work", "Family", "School"];

export const TAGS_ENUM = { all: "Show all", edit: "Edit tags" };

export default function TagsProvider({ children }) {
  const [tags, setTags] = useState(DEFAULT);
  const [currentFilterTag, setCurrentFilterTag] = useState(TAGS_ENUM.all);

  function updateTags(oldName, newName) {
    setTags(tags.map((tag) => (tag === oldName ? newName : tag)));
  }

  function removeTags(tagToRemove) {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  function addTags(newTag) {
    setTags(tags.concat(newTag));
  }

  return (
    <TagsContext.Provider
      value={{
        tags,
        currentFilterTag,
        setCurrentFilterTag,
        addTags,
        updateTags,
        removeTags,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
}
