import React from 'react';
import { DescriptionContainer } from './Description.elements';

function Description(props) {

  let title = props.lenguage === 'spanish' ? <h1>SOBRE MI</h1> : <h1>ABOUT ME</h1>;
  let description = props.lenguage === 'spanish' ? <h3>Tengo 29 años, soy argentino/polaco y estoy viviendo en Madrid. Me encanta programar, tengo experiencia en gestión empresarial y quiero crecer con determinación en el mundo IT.</h3> : <h3>I am 29 years old, I am Argentinian/Polish and I am living in Madrid. I love programming, I have experience in business management and want to work hard to grow in the IT world.</h3>

  return(
      <DescriptionContainer>
        { title }
        { description }
      </DescriptionContainer>
  );
}

export default Description;