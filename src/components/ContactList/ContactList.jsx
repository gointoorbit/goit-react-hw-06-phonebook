import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <li className={css.contactListItem} key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};
