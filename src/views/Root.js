import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import theme from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/globalStyle';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                exact
                element={<Navigate to="/group" replace />}
              />
              <Route path="/group">
                <Route index element={<Dashboard />} />
                <Route path=":id" element={<Dashboard />} />
              </Route>

              <Route path="add-user" element={<AddUser />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
