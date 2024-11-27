import { useContext } from "react";
import { TagsContext, TAGS_ENUM } from "../../context/TagsContext";

export default function NoNote() {
  const { currentFilterTag } = useContext(TagsContext);

  const textToDisplay =
    currentFilterTag === TAGS_ENUM.all
      ? "New note will be displayed here"
      : `No notes with the tag "${currentFilterTag}"`;

  return <h2 className="text-xl">{textToDisplay}</h2>;
}
