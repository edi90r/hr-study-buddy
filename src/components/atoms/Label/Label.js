import styled from 'styled-components';

const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Label;
