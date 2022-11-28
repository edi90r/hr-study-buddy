import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Badge from 'components/atoms/Badge/Badge';
import UsersListItemInfo from 'components/atoms/UsersListItemInfo/UsersListItemInfo';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types/types';
import { UserContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UserContext);
  return (
    <Wrapper>
      <Badge average={average} />
      <UsersListItemInfo name={name} attendance={attendance} />
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
