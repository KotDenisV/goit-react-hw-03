import s from './Contact.module.css'
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact({ data: { id, name, number }, onDelete }) {
    return (
    <div className={s.container}>
      <p className={s.text}><IoMdContact /> {name}</p>
      <p className={s.text}><FaPhoneAlt /> {number}</p>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;