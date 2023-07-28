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

  let icon = props.theme === 'light' ? <BsMoon/> : <BsSun/>;

    return(
      <>
        <HeaderContainer>
          <HeaderWrapperLenguage>
            <ButtonLenguage>
            <span>Español</span>
              <ul>
                <li>
                  <p>English</p>
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