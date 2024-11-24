import { useContext } from "react";
import { TagsContext } from "../../context/TagsContext";

export default function NoNote() {
  const { currentFilterTag } = useContext(TagsContext);

  const textToDisplay =
    currentFilterTag === "All"
      ? "New note will be displayed here"
      : `No notes with the tag "${currentFilterTag}"`;

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h2 className="mb-36 text-xl">{textToDisplay}</h2>
    </div>
  );
}
