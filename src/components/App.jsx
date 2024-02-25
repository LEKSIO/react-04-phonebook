import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm, SectionWrapper } from 'components';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = formDataObj => {
    const hasDuplicate = contacts.some(
      ({ name }) => name.toLowerCase() === formDataObj.name.toLowerCase()
    );
    if (hasDuplicate)
      return alert(`${formDataObj.name} is already in contacts.`);
    formDataObj.id = nanoid();
    setContacts(prevState => [...prevState, formDataObj]);
  };

  return (
    <SectionWrapper title="Phonebook">
      <ContactsForm addContact={addContact} />
    </SectionWrapper>
  );
};
