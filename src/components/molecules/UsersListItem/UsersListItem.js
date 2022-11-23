import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Badge from 'components/atoms/Badge/Badge';
import UsersListItemInfo from 'components/atoms/UsersListItemInfo/UsersListItemInfo';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Badge average={average} />
    <UsersListItemInfo name={name} attendance={attendance} />
    <Button onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
