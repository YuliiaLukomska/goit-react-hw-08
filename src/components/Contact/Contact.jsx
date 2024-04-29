import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";

const Contact = ({ data: { name, number, id } }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
      <button
        className={css.contactBtn}
        onClick={() => setIsDeleteModalOpen(true)}
      >
        Delete
      </button>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        contactId={id}
      >
        <p>Are you sure you want to delete the contact?</p>
      </DeleteModal>
    </div>
  );
};

export default Contact;
