import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';
import { selectContacts, selectFilter } from '../../store/selectors.js';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filterContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>{phone}</p>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
