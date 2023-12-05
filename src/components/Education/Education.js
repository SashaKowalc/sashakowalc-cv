import React from "react";
import {
  EducationContainer,
  EducationWrapper
} from './Education.elements'

function Education (props) {

  let title = props.lenguage === 'spanish' ? <summary>FORMACION ACADEMICA</summary> : <summary>VOCATIONAL TRAINING</summary> 

  return (
    <EducationContainer>
      <details>
        {title}
        <EducationWrapper>
          <ul className="timeline">
              <li className="event" data-date="ABRIL 2013 - ACT.">
                <h3>LICENCIATURA EN ADMINISTRACION DE EMPRESAS</h3>
                <p>En curso (21 de 30 materias aprobadas)</p>
                <h4>Universidad de Buenos Aires, Argentina</h4>
              </li>
            
            <li className="event" data-date="AGO 2022 - ABR 2023">
              <h3>PROGRAMACION WEB FULL STACK NODE JS</h3>
              <p>Completo (420 horas certificadas)</p>
              <h4>Digital House, Argentina</h4>
            </li>
            
            <li className="event" data-date="JUN 2023 - ACT.">
              <h3>PROGRAMACION .NET</h3>
              <p>En curso</p>
              <h4>Curso autodidacta con familiar especializado.</h4>
            </li>

            <li className="event" data-date="ABR 2023 - ACT.">
              <h3>IDIOMA: INGLES</h3>
              <p>En curso (nivel actual A2)</p>
              <h4>WALL STREET ENGLISH</h4>
            </li>
          </ul>
        </EducationWrapper>
      </details>
    </EducationContainer>
  );
};

export default Education;