import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderWrapperLenguage,
  HeaderWrapperDarkMode,
  ButtonLenguage,
  SwitchDarkMode,
  SwitchBgc
} from "./Header.elements";
import { BsSun, BsMoon } from 'react-icons/bs';

function Header(props) {
  const [ position, setPosition ] = useState(false);

  const [ lengPosition, setLengPosition ] = useState(false);

  const changeMode = () => {
    if (props.theme ===  'light') {
      props.setTheme('dark');
      changePosition();
    } else {
      props.setTheme('light');
      changePosition();
    }
  }

  const changePosition = () => {
    setPosition(!position);
  }

  const changeLenguage = () => {
    if(props.lenguage === "spanish") {
      props.setLenguage("english");
      changeLengPosition();
    } else {
      props.setLenguage("spanish");
      changeLengPosition();
    }
  }

  const changeLengPosition = () => {
    setLengPosition(!lengPosition);
  }

  let icon = props.theme === 'light' ? <BsMoon/> : <BsSun/>;

  let lengInicial = props.lenguage === "spanish" ? <span>Español</span> : <span>English</span>;
  let lengFinal = props.lenguage === "spanish" ? <p>English</p> : <p>Español</p>;

    return(
      <>
        <HeaderContainer>
          <HeaderWrapperLenguage>
            <ButtonLenguage 
            onClick={ () => changeLenguage() }
            lengPosition = { lengPosition } >
            { lengInicial }
              <ul>
                <li>
                  { lengFinal }
                </li>
              </ul>
            </ButtonLenguage>
          </HeaderWrapperLenguage>
          <HeaderWrapperDarkMode>
            <SwitchBgc>
              <SwitchDarkMode 
                onClick={ () => changeMode() } 
                position= { position } 
              ></SwitchDarkMode>
              {icon}
            </SwitchBgc>
          </HeaderWrapperDarkMode>
        </HeaderContainer>
      </>
    );
}

export default Header;