import { useContext } from "react";
import { TagsContext } from "../../context/TagsContext";
import SideBarTag from "./SideBarTag";

export default function Sidebar() {
  const { tags, currentFilterTag } = useContext(TagsContext);

  const tagList = tags.map((tag) => (
    <SideBarTag
      key={tag}
      isCurrentTag={tag === currentFilterTag}
      icon="🏷️"
      tag={tag}
    />
  ));
  return (
    <aside className="sidebar-transition group fixed h-dvh w-12 bg-inherit py-2 transition-all hover:w-60 hover:shadow-2xl hover:shadow-black">
      <ul>
        <SideBarTag
          isCurrentTag={currentFilterTag === "All"}
          icon="💡"
          tag="All"
        />
        {tagList}
        <SideBarTag
          isCurrentTag={currentFilterTag === "Edit"}
          icon="✏️"
          tag="Edit"
        />
      </ul>
    </aside>
  );
}
