import { useContext } from "react";
import { TagsContext } from "../context/TagsContext";
import { NewEntryContext } from "../context/NewEntryContext";

export default function TagPicker() {
  const { tags } = useContext(TagsContext);
  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { tags: entryTags } = newEntry;

  function handleTagsChange(tag) {
    let updatedTags;
    if (entryTags.includes(tag)) {
      updatedTags = entryTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...entryTags, tag];
    }
    setNewEntry({ ...newEntry, tags: updatedTags });
  }
  return (
    <ul className="absolute left-10 top-9 w-max flex-col rounded-md bg-zinc-800 shadow-lg shadow-zinc-950">
      {tags.map((tag) => (
        <li key={tag}>
          <label className="inline-block w-full px-3 py-2 hover:cursor-pointer hover:bg-white hover:bg-opacity-10">
            <input
              type="checkbox"
              className="mr-2 hover:cursor-pointer"
              checked={entryTags.includes(tag)}
              onChange={() => handleTagsChange(tag)}
            />
            {tag}
          </label>
        </li>
      ))}
    </ul>
  );
}
