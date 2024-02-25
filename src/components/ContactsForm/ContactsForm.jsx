import css from './ContactsForm.module.css';

export const ContactsForm = ({ addContact }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    addContact({ name, number });
    e.currentTarget.reset();
  };

  return (
    <form className={css['contacts-form']} onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Name</label>
      <input
        type="text"
        name="name"
        id="contact-name"
        autoComplete="name"
        required
      />
      <label htmlFor="contact-number">Number</label>
      <input
        type="tel"
        name="number"
        id="contact-number"
        autoComplete="tel"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
