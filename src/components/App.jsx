import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../store/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
