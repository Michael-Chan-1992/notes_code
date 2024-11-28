const VERSION = "1.0.0";

const localStorageVersion = localStorage.getItem("version");
if (localStorageVersion !== VERSION) {
  localStorage.clear();
  localStorage.setItem("version", VERSION);
}

const localStorageTags = localStorage.getItem("tags");
const parsedTags = localStorageTags
  ? JSON.parse(localStorageTags)
  : ["Personal", "Work", "School", "Family"];

const localStorageNotes = localStorage.getItem("notes");
const parsedNotes = localStorageNotes
  ? JSON.parse(localStorageNotes)
  : [
      {
        id: 0,
        title: "Welcome!",
        content: "This app is built with React, Tailwind CSS, dnd-kit 💻",
        tags: [],
        color: "blue",
      },
      {
        id: 1,
        title: "Basic notes function",
        content:
          "Create, edit and delete notes with title, content, color and tags 📝",
        tags: ["Personal"],
        color: "yellow",
      },
      {
        id: 2,
        title: "Tags and filter",
        content:
          "Tags can be added to each note for easy filtering 🏷️\nFilters are shown on the sidebar on the left ⬅️",
        tags: ["Work"],
        color: "green",
      },
      {
        id: 3,
        title: "Drag and drop",
        content: "Notes can be reordered by dragging to the designated slot 🖐️",
        tags: ["School", "Family"],
        color: "red",
      },
      {
        id: 4,
        title: "Other personal project",
        content:
          "Please take a look at -\nWordle Replica\n\nClick the link in bottom left corner! ↙️",
        tags: [],
        color: "violet",
      },
    ];

export { parsedTags, parsedNotes };
