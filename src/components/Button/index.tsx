import { ButtonHTMLAttributes } from 'react';

import { Buttons } from './styles';

type ButtonProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <Buttons data-testid="button" {...rest}>
      {children}
    </Buttons>
  )
}

export default Button;
