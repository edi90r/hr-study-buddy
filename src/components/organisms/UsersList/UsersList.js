import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { UserShape } from 'types/types';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <ul>
        {users.map((userData, i) => (
          <UsersListItem userData={userData} key={i} />
        ))}
      </ul>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)).isRequired,
};

export default UsersList;
