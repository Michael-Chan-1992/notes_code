export default function Button({ children, onClick, title }) {
  return (
    <button
      type="button"
      className="size-9 shrink-0 rounded-full hover:bg-white hover:bg-opacity-10"
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
}
