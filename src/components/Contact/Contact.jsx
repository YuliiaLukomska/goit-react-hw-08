import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import EditContactModal from "../EditContactModal/EditContactModal";
import EditContactForm from "../EditContactForm/EditContactForm";

const Contact = ({ data: { name, number, id } }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);

  return (
    <div className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoPersonSharp className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <div className={css.contactButtonsWrapper}>
        <button
          type="button"
          className={css.contactBtn}
          onClick={() => setIsEditContactModalOpen(true)}
        >
          Edit
        </button>
        <button
          className={css.contactBtn}
          onClick={() => setIsDeleteModalOpen(true)}
          type="button"
        >
          Delete
        </button>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        contactId={id}
      >
        <p>Are you sure you want to delete the contact?</p>
      </DeleteModal>
      <EditContactModal
        isOpen={isEditContactModalOpen}
        onClose={() => setIsEditContactModalOpen(false)}
      >
        <EditContactForm
          contactId={id}
          name={name}
          number={number}
          onClose={() => setIsEditContactModalOpen(false)}
        />
      </EditContactModal>
    </div>
  );
};

export default Contact;
