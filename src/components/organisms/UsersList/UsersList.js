import React from 'react';
import { users } from 'data/Users';
import { Wrapper } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
