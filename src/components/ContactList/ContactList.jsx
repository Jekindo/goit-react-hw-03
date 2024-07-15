import Contact from '../Contact/Contact';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} onDeleteContact={onDeleteContact} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
