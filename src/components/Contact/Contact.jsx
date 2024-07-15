import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';

import s from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <div className={s.content}>
        <p className={s.name}>
          <FaUser /> {name}
        </p>
        <p className={s.number}>
          <BsTelephoneFill /> {number}
        </p>
      </div>

      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
