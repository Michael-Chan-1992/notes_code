import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import EditTagsModal from "./EditTagsModal";

export default function Modal() {
  const { modal, setModal } = useContext(ModalContext);

  if (modal === "none") return;

  return (
    <div
      id="modal"
      className="fixed inset-0 z-10 flex items-center justify-center bg-neutral-900 bg-opacity-70"
      // onClick={() => setModal("none")}
    >
      {modal === "edit" ? <EditTagsModal /> : "note modal"}
    </div>
  );
}
