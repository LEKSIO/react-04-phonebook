export const ContactsListFilter = ({ filter, setFilter }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" name="keyword" value={filter} onChange={setFilter} />
  </div>
);
