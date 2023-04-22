import PropTypes from 'prop-types';

const ContactList = ({ contactsList, deleteContact }) => {
  return (
    <ul>
      {contactsList.map(({ id, number, name }) => (
        <li key={id}>
          <p>
            {name}:{number}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
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
