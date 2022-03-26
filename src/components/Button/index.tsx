import React from 'react';

import { Container } from './styles';

type Props = {
  onClick: () => void;
}

const Button: React.FC<Props> = ({children, onClick}) => {
  return(
    <Container onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;