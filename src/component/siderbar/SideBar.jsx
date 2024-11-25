import { useContext } from "react";
import { TagsContext, TAGS_ENUM } from "../../context/TagsContext";
import SideBarTag from "./SideBarTag";
import { VisibilityContext } from "../../context/VisibilityContext";

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
          isCurrentTag={currentFilterTag === TAGS_ENUM.all}
          icon="💡"
          tag={TAGS_ENUM.all}
        />
        {tagList}
        <SideBarTag
          isCurrentTag={currentFilterTag === TAGS_ENUM.edit}
          icon="✏️"
          tag={TAGS_ENUM.edit}
        />
      </ul>
    </aside>
  );
}
