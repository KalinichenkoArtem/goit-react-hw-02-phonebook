import PropTypes from 'prop-types';
import { List, Item, Field, DeleteBtn } from './ContactList.styled';

const ContactList = ({ contactsList, deleteContact }) => {
  return (
    <List>
      {contactsList.map(({ id, number, name }) => (
        <Item key={id}>
          <Field>
            {name}:{number}
          </Field>
          <DeleteBtn type="button" onClick={() => deleteContact(id)}>
            Delete contact
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
