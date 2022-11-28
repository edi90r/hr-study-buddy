import PropTypes from 'prop-types';

export const UserShape = {
  name: PropTypes.string.isRequired,
  average: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};
