import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import NewTagInput from "./NewTagInput";
import EditTag from "./EditTag";
import { TagsContext } from "../../context/TagsContext";

export default function EditTagsModal() {
  const { setModal } = useContext(ModalContext);
  const { tags } = useContext(TagsContext);

  return (
    <div className="w-[300px] bg-zinc-700">
      <div className="m-2">
        <ul className="flex flex-col">
          <p className="text-lg">Edit tags</p>
          <NewTagInput />

          {tags.map((tag, i) => (
            <EditTag currentTag={tag} key={tag} currentIndex={i} />
          ))}
        </ul>
      </div>
      <div className="flex flex-row-reverse border-t border-neutral-400 p-3">
        <button
          type="button"
          className="rounded-md px-3 py-1 hover:bg-white hover:bg-opacity-10"
          onClick={() => setModal({ type: "none" })}
        >
          Close
        </button>
      </div>
    </div>
  );
}
