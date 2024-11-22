import Sidebar from "./component/Sidebar";
import TagsProvider from "./context/TagsContext";
import AppLayout from "./layout/AppLayout";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <TagsProvider>
      <AppLayout>
        <Sidebar />
        <MainLayout>
          <div>Input</div>
          <div>Notes</div>
        </MainLayout>
      </AppLayout>
    </TagsProvider>
  );
}
