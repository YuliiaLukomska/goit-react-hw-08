import css from "./DeleteModal.module.css";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const DeleteModal = ({ isOpen, onClose, children, contactId }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contactId));
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
      <div className={css.modalButtons}>
        <button className={css.modalButton} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.modalButton} onClick={() => onClose()}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
