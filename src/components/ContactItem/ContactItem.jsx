import { Button, ContactStyle, Name } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, deleteContact }) => (
  <ContactStyle>
    <Name>
      {name}: {number}
    </Name>
    <Button type="button" onClick={() => deleteContact(id)}>
      Delete
    </Button>
  </ContactStyle>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
