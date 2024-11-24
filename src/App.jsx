import EntrySection from "./component/EntrySection";
import NotesSection from "./component/NotesSection";
import Sidebar from "./component/Sidebar";
import NewEntryProvider from "./context/NewEntryContext";
import NotesProvider from "./context/NotesContext";
import TagsProvider from "./context/TagsContext";
import VisibilityProvider from "./context/VisibilityContext";
import AppLayout from "./layout/AppLayout";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <TagsProvider>
      <NotesProvider>
        <VisibilityProvider>
          <NewEntryProvider>
            <AppLayout>
              <Sidebar />
              <MainLayout>
                <EntrySection />
                <NotesSection />
              </MainLayout>
            </AppLayout>
          </NewEntryProvider>
        </VisibilityProvider>
      </NotesProvider>
    </TagsProvider>
  );
}
