import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: ${({ theme }) => theme.colors.lightGrey};
`;
