import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { TagsContext, TAGS_ENUM } from "../../context/TagsContext";
import Note from "./Note";
import NoNotes from "./NoNotes";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  MouseSensor,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { VisibilityContext } from "../../context/VisibilityContext";
import clsx from "clsx";

export default function NotesSection() {
  const { notes, setNotes } = useContext(NotesContext);
  const { currentFilterTag } = useContext(TagsContext);
  const { setOptionsNotVisible } = useContext(VisibilityContext);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  const filteredNotes =
    currentFilterTag === TAGS_ENUM.all
      ? notes
      : notes.filter((note) => note.tags.includes(currentFilterTag));

  const notesToShow = filteredNotes.map((note) => (
    <Note key={note.id} {...note} />
  ));

  const noNotesToShow = filteredNotes.length === 0;

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setNotes((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleDragStart() {
    setOptionsNotVisible();
  }

  return (
    <section
      className={clsx(
        "flex flex-1",
        noNotesToShow
          ? "items-center justify-center"
          : "flex-wrap content-start gap-4",
      )}
    >
      <DndContext
        modifiers={[restrictToWindowEdges]}
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={notes}>
          {noNotesToShow ? <NoNotes /> : notesToShow}
        </SortableContext>
      </DndContext>
    </section>
  );
}
