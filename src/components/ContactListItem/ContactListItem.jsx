import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactItem}>
      <span className={css.itemContainer}>
        {contact.name}: {contact.number}
      </span>
      <button
        id={contact.id}
        type="button"
        className={css.buttonItem}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
