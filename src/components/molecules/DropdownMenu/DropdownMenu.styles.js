import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  position: relative;
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1;
`;

export const MenuList = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 0 0 20px 20px;
  transform: ${({ active }) => (active ? 'scaleY(1)' : 'scaleY(0)')};
  transition: transform 0.3s ease-in;
  transform-origin: top;
  z-index: 2;
`;

export const ListItem = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;
  line-height: 32px;
  transition: 0.3s ease-in-out background-color, 0.3s ease-in-out color;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &:first-child {
    padding-top: 12px;
  }

  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`;

export const DropdownButton = styled(Button)`
  position: relative;
  margin: 0;
  z-index: 3;
`;
