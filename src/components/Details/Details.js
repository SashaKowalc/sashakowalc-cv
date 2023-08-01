import React from 'react';
import { 
  DetailsContainer,
  DetailsWrapper
} from './Details.elements';

function Details(props) {

  let tittle = props.lenguage === 'spanish' ? <summary>HABILIDADES</summary> : <summary>SKILLS</summary>

  return (
    <DetailsContainer>
      <details>
        { tittle }
          <DetailsWrapper>
            <h2 className='skill'>HTML 5</h2>
            <div className='progressBar'>
              <div className='html'><span>90%</span></div>
            </div>
            <h2 className='skill'>CSS 3 / Tailwind</h2>
            <div className='progressBar'>
              <div className='css'><span>90%</span></div>
            </div>
            <h2 className='skill'>APIs</h2>
            <div className='progressBar'>
              <div className='apis'><span>90%</span></div>
            </div>
            <h2 className='skill'>JavaScript</h2>
            <div className='progressBar'>
              <div className='js'><span>85%</span></div>
            <h2 className='skill'>MySQL</h2>
            <div className='progressBar'>
              <div className='mysql'><span>75%</span></div>
            </div>
            <h2 className='skill'>PHP</h2>
            <div className='progressBar'>
              <div className='php'><span>70%</span></div>
            </div>
            </div>
            <h2 className='skill'>React</h2>
            <div className='progressBar'>
              <div className='react'><span>60%</span></div>
            </div>
          </DetailsWrapper>
      </details>
    </DetailsContainer>
  );
};

export default Details;