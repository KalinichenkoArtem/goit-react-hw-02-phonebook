import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={changeFilter} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
