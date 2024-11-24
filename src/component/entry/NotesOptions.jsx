import { useContext } from "react";
import ColorPicker from "./ColorPicker";
import { VisibilityContext } from "../../context/VisibilityContext";
import TagPicker from "./TagPicker";

export default function NotesOptions() {
  const {
    colorPickerVisible,
    setColorPickerVisible,
    tagPickerVisible,
    setTagPickerVisible,
  } = useContext(VisibilityContext);

  function handleToggleColor() {
    setColorPickerVisible(!colorPickerVisible);
    setTagPickerVisible(false);
  }

  function handleToggleTag() {
    setTagPickerVisible(!tagPickerVisible);
    setColorPickerVisible(false);
  }

  return (
    <div className="relative flex gap-1" onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="h-9 w-9 rounded-full hover:bg-white hover:bg-opacity-10"
        onClick={handleToggleColor}
      >
        🎨
      </button>
      {colorPickerVisible && <ColorPicker />}
      <button
        type="button"
        className="h-9 w-9 rounded-full hover:bg-white hover:bg-opacity-10"
        onClick={handleToggleTag}
      >
        🏷️
      </button>
      {tagPickerVisible && <TagPicker />}
    </div>
  );
}
