import styled from "styled-components";

export const ProfileContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
  padding: 5px 0px 5px 0px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
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

  @media (max-width: 1024px) {
    h1 {
      position: relative;
      right: 0px;
      margin: auto;
      max-width: 500px;
    }

    h2 {
      position: relative;
      right: 0px;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 426px) {
    h1 {
      font-size: 18px;
      width: 150px;
    }

    h2{
      font-size: 12px;
      width: 150px;
    }
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

  @media (max-width: 768px) {
    img{ 
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 426px) {
    img {
      width: 130px;
      height: 130px;
      border: 4px solid ${ ( { theme } ) => theme.btnbgn };
    }
  }


`
