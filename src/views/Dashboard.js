import React, { useContext } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UserContext } from 'providers/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UserContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
