import styled from 'styled-components';
import theme from 'assets/icons/styles/theme';

const choosingColorBadge = (average) => {
  if (average <= 2) {
    return theme.colors.error;
  } else if (average > 2 && average <= 4) {
    return theme.colors.warning;
  } else {
    return theme.colors.success;
  }
};

export const StyledBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ average }) => choosingColorBadge(average)};
  border-radius: 50%;
`;
