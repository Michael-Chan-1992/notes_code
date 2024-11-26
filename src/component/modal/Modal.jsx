import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import EditTagsModal from "./EditTagsModal";
import EditNotesModal from "./EditNotesModal";

export default function Modal() {
  const { modal } = useContext(ModalContext);

  if (modal.type === "none") return;

  return (
    <div
      id="modal"
      className="fixed inset-0 z-10 flex items-center justify-center bg-zinc-800 bg-opacity-70 *:shadow-md *:shadow-zinc-950"
    >
      {modal.type === "tags" ? <EditTagsModal /> : <EditNotesModal />}
    </div>
  );
}
