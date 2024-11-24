import clsx from "clsx";
import { useContext } from "react";
import { NewEntryContext } from "../../context/NewEntryContext";

export const COLORS = [
  "transparent",
  "bg-red-800",
  "bg-orange-800",
  "bg-yellow-800",
  "bg-green-800",
  "bg-blue-800",
  "bg-violet-800",
  "bg-purple-800",
];

export default function ColorPicker() {
  const { newEntry, setNewEntry } = useContext(NewEntryContext);
  const { color: currentColor } = newEntry;
  return (
    <div className="absolute top-9 flex gap-5 rounded-md bg-zinc-800 p-3 shadow-lg shadow-zinc-950">
      {COLORS.map((color, i) => (
        <div
          key={color}
          className={clsx(
            "size-8 rounded-full border-2 hover:cursor-pointer",
            color === "transparent" ? "bg-transparent" : color,
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
