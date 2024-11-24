import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { TagsContext } from "../../context/TagsContext";
import Note from "./Note";
import NoNotes from "./NoNotes";

export default function NotesSection() {
  const { notes } = useContext(NotesContext);
  const { currentFilterTag } = useContext(TagsContext);

  const filteredNotes =
    currentFilterTag === "All"
      ? notes
      : notes.filter((note) => note.tags.includes(currentFilterTag));

  const notesToShow = filteredNotes.map((note) => (
    <Note key={note.id} {...note} />
  ));

  const noNotesToShow = filteredNotes.length === 0;

  return (
    <section className="flex flex-1 flex-wrap content-start items-start gap-4">
      {noNotesToShow ? <NoNotes /> : notesToShow}
    </section>
  );
}
