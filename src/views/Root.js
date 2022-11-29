import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import UsersProvider from 'providers/UsersProvider';
import GlobalStyle from 'assets/styles/globalStyle';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="add-user" element={<AddUser />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
