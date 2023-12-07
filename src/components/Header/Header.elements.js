import styled from "styled-components";

export const HeaderContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  height: 46px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: ${ ( { theme } ) => theme.bgc };
`

// ------ LENGUAGE BUTTON ------
export const HeaderWrapperLenguage = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
`

export const ButtonLenguage = styled.button `
  display: flex;
  position: relative;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  color: ${ ( { theme } ) => theme.btntext };
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  filter: drop-shadow(0 2px 8px rgba(39, 93, 254, 0.039));
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    font-weight: bold;
    height: 100%;
    background: ${ ( { theme } ) => theme.btnbgn };
    border-radius: 24px;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover::before {
    background: ${ ( { theme } ) => theme.btnhover };
  }

  span {
    display: inline-flex;
    vertical-align: middle;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  span:first-child {
  padding-right: 7px;
  }

  span {
    margin-left: 8px;
  }

  ul {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    transform: translateY(-50%);
  }

  ul li {
    flex: 1;
  }

  ul li p {
    display: inline-flex;
    vertical-align: middle;
    transform: translateY(55px);
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  ul li p:hover {
    opacity: 0.5;
  }

  &:hover::before { 
    transform: scale(0.9);
  }

  &:hover span {
    transform: translateY(-55px);
  }

  &:hover ul li p {
    transform: translateY(0);
  }
`

// ------ DARK MODE ------
export const HeaderWrapperDarkMode = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`
export const SwitchBgc = styled.div `
  display: flex;
  position: relative;
  width: 40px;
  height: 28px;
  border-radius: 24px;
  background: ${ ( { theme } ) => theme.btnbgn };
  transition: 0.5s all ease-in;

  svg {
    position: absolute;
    top: 1px;
    left: 65px;
    font-size: 24px;
    color: ${ ( { theme } ) => theme.text };
  }
`

export const SwitchDarkMode = styled.button `
  position: absolute;
  cursor: pointer;
  bottom: 4px;
  left: ${({position}) => position ? '10px' : '7px'};
	width: 20px;
	height: 20px;
	background: ${ ( { theme } ) => theme.btntext };
  border: none;
	border-radius: 50%;
  transition: 0.5s all ease-in;
  outline: none;
`