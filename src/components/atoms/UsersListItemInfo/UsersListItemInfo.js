import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  StyledName,
  StyledAttendance,
} from './UserListItemonfo.styles';

const UsersListItemInfo = ({ name, attendance }) => (
  <Wrapper>
    <StyledName>{name}</StyledName>
    <StyledAttendance>attendance: {attendance}</StyledAttendance>
  </Wrapper>
);

UsersListItemInfo.propTypes = {
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string,
};

export default UsersListItemInfo;
