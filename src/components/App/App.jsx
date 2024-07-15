import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(initialValues);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(search);
    setContacts(() => {
      return contacts.filter(contact => contact.name.includes(search));
    });
  }, [search]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox search={search} onSearch={setSearch} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;