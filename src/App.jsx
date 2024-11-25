import EntrySection from "./component/entry/EntrySection";
import Modal from "./component/modal/Modal";
import NotesSection from "./component/notes/NotesSection";
import Sidebar from "./component/siderbar/Sidebar";
import ModalProvider from "./context/ModalContext";
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
            <ModalProvider>
              <AppLayout>
                <Sidebar />
                <MainLayout>
                  <EntrySection />
                  <NotesSection />
                </MainLayout>
                <Modal />
              </AppLayout>
            </ModalProvider>
          </NewEntryProvider>
        </VisibilityProvider>
      </NotesProvider>
    </TagsProvider>
  );
}
