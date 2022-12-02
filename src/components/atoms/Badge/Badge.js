import React from 'react';
import PropTypes from 'prop-types';
import { StyledBadge } from './Badge.styles';

const Badge = ({ average }) => (
  <StyledBadge average={average}>{average}</StyledBadge>
);

Badge.propTypes = {
  average: PropTypes.string.isRequired,
};

export default Badge;
