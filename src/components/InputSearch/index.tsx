import React from 'react';

import { Container } from './styles';

interface Props{
  type?: string;
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
}

const InputSearch: React.FC<Props> = ({type, value, placeholder, onChange}) => {
  return(
    <Container type={type} value={value} placeholder={placeholder} onChange={onChange}>

    </Container>
  );
}

export default InputSearch;