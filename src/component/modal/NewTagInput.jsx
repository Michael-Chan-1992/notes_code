import { useContext, useEffect, useRef, useState } from "react";
import { TagsContext } from "../../context/TagsContext";
import clsx from "clsx";
import Button from "../Button";

export default function NewTagInput() {
  const [newTag, setNewTag] = useState("");
  const [newTagState, setNewTagState] = useState("idle");
  const { tags, addTags } = useContext(TagsContext);

  const newTagRef = useRef();

  function clearNewTag() {
    setNewTagState("idle");
    setNewTag("");
    newTagRef.current.blur();
  }

  function startEdit() {
    setNewTagState("editing");
    newTagRef.current.focus();
  }

  function handleAddNewTag() {
    clearNewTag();
    if (tags.includes(newTag)) return;
    addTags(newTag);
  }

  const addButton = (
    <Button onClick={startEdit} title="Create">
      ➕
    </Button>
  );

  const cancelButton = (
    <Button onClick={clearNewTag} title="Cancel">
      ❌
    </Button>
  );

  useEffect(() => {
    startEdit();
  }, []);
  return (
    <li
      className="flex items-center gap-3"
      onClick={(e) => e.stopPropagation()}
    >
      {newTagState === "editing" ? cancelButton : addButton}

      <input
        ref={newTagRef}
        value={newTag}
        maxLength={20}
        onClick={() => setNewTagState("editing")}
        onChange={(e) => setNewTag(e.target.value)}
        placeholder="Add new tag"
        className="min-w-0 border-b border-transparent bg-transparent placeholder:text-neutral-300 focus:border-neutral-500 focus:outline-none"
      />

      <button
        className={clsx(
          "size-9 shrink-0 rounded-full hover:bg-white hover:bg-opacity-10",
          !newTag && "invisible",
        )}
        onClick={handleAddNewTag}
        title="Confirm"
      >
        ✔️
      </button>
    </li>
  );
}
