import PropTypes from 'prop-types';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, changeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
