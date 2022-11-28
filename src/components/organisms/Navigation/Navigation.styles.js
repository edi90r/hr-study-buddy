import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  margin: 15px 24px 15px auto;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  text-decoration: none;

  &[class*='active'] {
    &:after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -24px;
    width: 16px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
