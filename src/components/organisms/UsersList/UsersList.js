import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { UserShape } from 'types/types';
import { Title } from 'components/atoms/Title/Title.styles';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Users List</Title>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem userData={userData} key={i} />
        ))}
      </ul>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
};

export default UsersList;
