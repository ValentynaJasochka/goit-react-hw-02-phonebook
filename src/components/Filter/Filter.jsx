import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => (
  <Label>
    Find contacts by name:
    <Input
      type="text"
      name="filter"
      value={filter}
      title="Enter the name"
      required
      onChange={changeFilter}
    />
  </Label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
