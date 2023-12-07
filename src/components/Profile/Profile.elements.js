import styled from "styled-components";

export const ProfileContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
`

export const NameWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    display: flex;
    font-size: 30px;
    max-width: 350px;
    color: ${ ( { theme } ) => theme.text };
    position: relative;
    right: 25px;
  }

  h2 {
    display: flex;
    font-size: 17px;
    max-width: 360px;
    color: ${ ( { theme } ) => theme.text };
    position: relative;
    right: 25px;
  }
`

export const CardProfileWrapper = styled.div `
  display: flex;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 8px solid ${ ( { theme } ) => theme.btnbgn };
  }
`
