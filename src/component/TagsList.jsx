export default function TagsList({ tags }) {
  return (
    <ul className="flex h-7 flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-xl border border-neutral-500 px-2 py-1 text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
