import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Heder } from './Contacts.styled';

export const Contacts = ({ contacts, deleteContact, children }) => (
  <>
    <Heder>Contacts</Heder>
    {children}
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
