import React from 'react';
import { DescriptionContainer } from './Description.elements';

function Description(props) {

  let title = props.lenguage === 'spanish' ? <h1>SOBRE MI</h1> : <h1>FULL STACK DEVELOPER</h1>;
  let description = props.lenguage === 'spanish' ? <h3>Tengo 29 años, vivo en Buenos Aires y estoy a punto de emigrar hacia Madrid. Me encanta programar, tengo experiencia en gestión empresarial y quiero crecer con determinación en el mundo IT.</h3> : <h3>I am 29 years old, I live in Buenos Aires and I am about to emigrate to Madrid. I love programming, I have experience in business management and I want to grow with determination in the IT world.</h3>

  return(
      <DescriptionContainer>
        { title }
        { description }
      </DescriptionContainer>
  );
}

export default Description;