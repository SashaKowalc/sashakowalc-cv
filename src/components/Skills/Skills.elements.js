import styled from "styled-components";

export const SkillsContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
  padding: 5px 0px 5px 0px;

  summary {
    color: ${ ( { theme } ) => theme.text};
    font-size: 17px;
    font-weight: 800px;
    margin: 5px 0px 0px 60px;
    cursor: pointer;

    @media (max-width: 1025px) {
      details {
        width: 100%;
      }
    }
  }

  @media (max-width: 426px) {
    summary {
      font-size: 13px;
      margin: auto;
      padding: 0px 0px 0px 15px;
    }
  }

  @media (max-width: 769px) {
    summary {
      font-size: 15px;
    }
  }
`

export const SkillsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 60px;
  height: 100%;

  h2 {
    color: ${ ( { theme } ) => theme.text};
  }

  details {
    background-color: red;
  }

  @media (max-width: 1025px) {
    div.progressBar {
      width: 400px;
    }
  }

  @media (max-width: 769px) {
    div.progressBar {
      width: 300px;
    }

    h2 {
      font-size: 11px;
    }

    div.progressBar div span {
      font-size: 8px;
      height: 13px;
      width: 22px;
    }
  }

  @media (max-width: 426px) {
    padding: 0px 0px 0px 7px;
    
    div.progressBar {
      width: 200px;
    }
  }

  @media (max-width: 376px) {
    div.progressBar {
      width: 170px;
    }
  }
`