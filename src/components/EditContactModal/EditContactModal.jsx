import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import css from "./EditContactModal.module.css";

const EditContactModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.modalOverlay}
      className={css.modalContent}
      ariaHideApp={false}
      closeTimeoutMS={200}
      onRequestClose={() => onClose()}
    >
      <button onClick={() => onClose()} className={css.modaleCloseButton}>
        <IoMdClose />
      </button>
      {children}
    </Modal>
  );
};

export default EditContactModal;
