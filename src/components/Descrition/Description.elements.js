import styled from "styled-components";

export const DescriptionContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
  padding: 5px 0px 5px 0px;

  h1 {
    display: flex;
    font-size: 21px;
    max-width: 200px;
    color: ${ ( { theme } ) => theme.text };
    padding: 0px 0px 0px 60px;
  }

  h3 {
    display: flex;
    font-size: 14px;
    padding: 0px 70px 0px 60px;
    font-weight: bold;
    color: ${ ( { theme } ) => theme.text };
  }

  @media (max-width: 1025px ) {
    h3 {
      padding: 0px 20px 0px 60px;
    }
  }

    @media (max-width: 768px) {
      h1 {
        font-size: 18px;
      }

      h3 {
        font-size: 12px;
      }
    }

    @media (max-width: 426px) {
      h1 {
        font-size: 16px;
        padding: 0px;
        margin: auto;
      }

      h3 {
        font-size: 11px;
        padding: 0px 7px 0px 7px;
        margin: auto;
      }
    }
`
