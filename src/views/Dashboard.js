import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import DropdownMenu from 'components/molecules/DropdownMenu/DropdownMenu';
import { ReactComponent as DropdownIcon } from 'assets/icons/dropdown-icon.svg';
import { TitleWrapper } from 'components/templates/NewsSection/NewsSection.styles';
import styled from 'styled-components';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id = 'A' } = useParams();

  const DashboardWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  `;

  const Header = styled(TitleWrapper)`
    display: flex;
    align-items: center;
    margin-right: auto;

    h3 {
      margin-right: 25px;
    }
  `;

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data: { groups } }) => setGroups(groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data: { students } }) => setStudents(students))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <DashboardWrapper>
        <Header>
          <h3>Group {id}</h3>
          <DropdownMenu
            dropDownTitle={'change group'}
            dropDownIcon={<DropdownIcon />}
            list={groups}
          />
        </Header>
        <ViewWrapper>
          <UsersList users={students} />
        </ViewWrapper>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
