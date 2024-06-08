import css from './AddContactForm.module.css';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const nameId = nanoid();
const numberId = nanoid();

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const duplicativeContact = contacts.some(
      contact => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (duplicativeContact) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContact(name, number));
    }
    form.reset();
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameId} className={css.contactFormLabel}>
        Name
      </label>
      <input
        id={nameId}
        className={css.contactFormInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <label htmlFor={numberId} className={css.contactFormLabel}>
        Number
      </label>
      <input
        id={numberId}
        className={css.contactFormInput}
        type="tel"
        name="number"
        pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
        title="Phone number must be digits and can contain spaces, dashes and must start with +"
        required
      ></input>
      <button type="submit" className={css.contactFormButton}>
        Add contact
      </button>
    </form>
  );
};
