import clsx from "clsx";
import TagsList from "../TagsList";

export default function Note({ title, content, tags, color }) {
  return (
    <div
      className={clsx(
        "flex w-60 flex-col gap-3 rounded-lg border p-3 shadow-md hover:shadow-zinc-950",
        color === "transparent"
          ? "border-neutral-500 bg-transparent"
          : `border-transparent ${color}`,
      )}
    >
      {title && <div className="text-sm font-bold">{title}</div>}
      {content && <div>{content}</div>}
      {tags.length > 0 && <TagsList tags={tags} />}
    </div>
  );
}
