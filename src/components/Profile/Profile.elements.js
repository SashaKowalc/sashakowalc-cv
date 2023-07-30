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
    font-size: 40px;
    max-width: 350px;
    color: ${ ( { theme } ) => theme.text };
  }

  h2 {
    display: flex;
    font-size: 20px;
    max-width: 290px;
    color: ${ ( { theme } ) => theme.text };
  }
`

export const CardProfileWrapper = styled.div `
  display: flex;

  img {
    width:300px;
    height:300px;
    border-radius: 50%;
    border:10px solid ${ ( { theme } ) => theme.btnbgn };
  }
`
