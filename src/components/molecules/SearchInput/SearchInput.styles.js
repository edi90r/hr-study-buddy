import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import {
  Wrapper,
  MenuList,
  ListItem,
} from 'components/molecules/DropdownMenu/DropdownMenu.styles';

export const InputWrapper = styled(Wrapper)`
  z-index: 4;

  ${Input} {
    position: relative;
    width: 100%;
    max-width: 350px;
    font-size: ${({ theme }) => theme.fontSize.l};
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    z-index: 6;
  }
`;

export const SearchMenuList = styled(MenuList)`
  z-index: 5;
`;

export const SearchListItem = styled(ListItem)`
  padding-left: 8px;
  text-align: left;
`;
