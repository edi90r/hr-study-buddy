import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 14px 0px 24px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledName = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
`;
