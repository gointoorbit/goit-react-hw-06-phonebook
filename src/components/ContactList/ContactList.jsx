import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);
  const visibleContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  console.log(visibleContacts);
  console.log(visibleContacts.length);
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
