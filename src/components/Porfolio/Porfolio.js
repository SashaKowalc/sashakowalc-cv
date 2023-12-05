import React from 'react';
import { 
  PorfolioContainer,
  PorfolioWrapper
} from './Porfolio.elements';

function Porfolio(props) {

  let tittle = props.lenguage === 'spanish' ? <summary>CAMBIAR</summary> : <summary>CAMBIAR</summary>

  return (
    <PorfolioContainer>
      <details>
        { tittle }
        <PorfolioWrapper>

        </PorfolioWrapper>
      </details>
    </PorfolioContainer>
  );
};

export default Porfolio;