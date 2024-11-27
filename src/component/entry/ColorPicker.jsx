import clsx from "clsx";
import { useContext } from "react";
import { NewEntryContext } from "../../context/NewEntryContext";

export const COLORS = {
  transparent: "bg-zinc-800",
  red: "bg-red-800",
  orange: "bg-orange-800",
  yellow: "bg-yellow-800",
  green: "bg-green-800",
  blue: "bg-blue-800",
  voilet: "bg-violet-800",
  purple: "bg-purple-800",
};

export default function ColorPicker() {
  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { color: currentColor } = newEntry;
  return (
    <div className="absolute top-9 z-10 flex gap-5 rounded-md bg-zinc-800 p-3 shadow-lg shadow-zinc-950">
      {Object.keys(COLORS).map((color, i) => (
        <div
          key={color}
          className={clsx(
            "size-8 rounded-full border-2 hover:cursor-pointer",
            COLORS[color],
            color === currentColor ? "border-purple-400" : "hover:border-white",
            {
              "border-zinc-500": i === 0 && color !== currentColor,
              "border-transparent": i !== 0 && color !== currentColor,
            },
          )}
          onClick={() => setNewEntry({ ...newEntry, color })}
        ></div>
      ))}
    </div>
  );
}
