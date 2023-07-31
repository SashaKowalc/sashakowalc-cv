import React from 'react';
import { DetailsContainer } from './Details.elements';

function Details(props) {

  let tittle = props.lenguage === 'spanish' ? <summary>HABILIDADES</summary> : <summary>SKILLS</summary>

  return (
    <DetailsContainer>
      <details>
        { tittle }
        <h4>
          HOLA
        </h4>
      </details>
    </DetailsContainer>
  );
};

export default Details;