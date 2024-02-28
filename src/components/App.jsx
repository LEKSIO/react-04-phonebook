import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactsList,
  ContactsForm,
  SectionWrapper,
  ContactsListFilter,
} from 'components';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  ); // (Note: any string includes an empty string)

  const addContact = formDataObj => {
    const hasDuplicate = contacts.some(
      ({ name }) => name.toLowerCase() === formDataObj.name.toLowerCase()
    );
    if (hasDuplicate)
      return alert(`${formDataObj.name} is already in contacts.`);
    formDataObj.id = nanoid();
    setContacts(prevState => [...prevState, formDataObj]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(obj => obj.id !== contactId));
  };

  return (
    <SectionWrapper title="Phonebook">
      <ContactsForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactsListFilter
        filter={filter}
        setFilter={e => setFilter(e.target.value)}
      />
      <ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
    </SectionWrapper>
  );
};
