import { AddContactForm } from './AddContactForm/AddContactForm.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { SearchFilter } from './SearchFilter/SearchFilter.jsx';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <SearchFilter />
      <ContactList />
    </>
  );
};
