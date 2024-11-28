import { createContext, useEffect, useState } from "react";
import { parsedTags } from "../localStorage";

export const TagsContext = createContext();

export const TAGS_ENUM = { all: "Show all", edit: "Edit tags" };

export default function TagsProvider({ children }) {
  const [tags, setTags] = useState(parsedTags);
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

  useEffect(() => {
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tags]);

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
