import { useContext } from "react";
import { VisibilityContext } from "../../context/VisibilityContext";
import ColorPicker from "./ColorPicker";
import TagPicker from "./TagPicker";
import Button from "../Button";

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
      <Button onClick={handleToggleColor} title="Background color">
        🎨
      </Button>

      {colorPickerVisible && <ColorPicker />}

      <Button onClick={handleToggleTag} title="Tags">
        🏷️
      </Button>
      {tagPickerVisible && <TagPicker />}
    </div>
  );
}
