import React, { useState, useEffect } from 'react';
import { users as userData } from 'data/Users';
import { Wrapper } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData) {
        resolve([...userData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log('Loading has changed');
  }, [isLoading]);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <ul>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UsersList;
