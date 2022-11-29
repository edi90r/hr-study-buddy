import React, { useState } from 'react';
import { users as usersData } from 'data/Users';

export const UserContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleInputChange: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UserContext.Provider value={{ users, handleAddUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;
