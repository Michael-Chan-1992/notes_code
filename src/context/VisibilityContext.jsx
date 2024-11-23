import { createContext, useState } from "react";

export const VisibilityContext = createContext();

import React from "react";

export default function VisibilityProvider({ children }) {
  const [fullEntryVisible, setFullEntryVisible] = useState(false);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [tagPickerVisible, setTagPickerVisible] = useState(false);

  function setAllNotVisible() {
    setFullEntryVisible(false);
    setColorPickerVisible(false);
    setTagPickerVisible(false);
  }

  function setOptionsNotVisible() {
    setColorPickerVisible(false);
    setTagPickerVisible(false);
  }

  return (
    <VisibilityContext.Provider
      value={{
        fullEntryVisible,
        setFullEntryVisible,
        colorPickerVisible,
        setColorPickerVisible,
        tagPickerVisible,
        setTagPickerVisible,
        setAllNotVisible,
        setOptionsNotVisible,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
}
