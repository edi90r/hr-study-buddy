import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, icon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
      {icon && <span>{icon}</span>}
    </StyledButton>
  );
};

export default Button;
