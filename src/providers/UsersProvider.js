import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleInputChange: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data: { students } }) => setUsers(students))
      .catch((err) => console.log(err));
  }, []);

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
