import React from 'react';
import { 
  SkillsContainer,
  SkillsWrapper
} from './Skills.elements';

function Details(props) {

  let tittle = props.lenguage === 'spanish' ? <summary>HABILIDADES</summary> : <summary>SKILLS</summary>

  return (
    <SkillsContainer>
      <details>
        { tittle }
          <SkillsWrapper>
            <h2 className='skill'>HTML 5</h2>
            <div className='progressBar'>
              <div className='html'><span>90%</span></div>
            </div>
            <h2 className='skill'>CSS</h2>
            <div className='progressBar'>
              <div className='css'><span>80%</span></div>
            </div>
            <h2 className='skill'>APIs</h2>
            <div className='progressBar'>
              <div className='apis'><span>90%</span></div>
            </div>
            <h2 className='skill'>JavaScript</h2>
            <div className='progressBar'>
              <div className='js'><span>85%</span></div>
            </div>
            <h2 className='skill'>SQL</h2>
            <div className='progressBar'>
              <div className='mysql'><span>75%</span></div>
            </div>
            <h2 className='skill'>.NET</h2>
            <div className='progressBar'>
              <div className='net'><span>40%</span></div>
            </div>
            <h2 className='skill'>React</h2>
            <div className='progressBar'>
              <div className='react'><span>70%</span></div>
            </div>
          </SkillsWrapper>
      </details>
    </SkillsContainer>
  );
};

export default Details;