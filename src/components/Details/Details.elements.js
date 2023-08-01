import styled from "styled-components";

export const DetailsContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  height: auto;
  background: ${ ( { theme } ) => theme.bgc };

  summary {
    color: ${ ( { theme } ) => theme.text};
    font-size: 23px;
    font-weight: 800px;
    padding: 20px 0px 0px 60px;
  }
`

export const DetailsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 60px;

  h2 {
    color: ${ ( { theme } ) => theme.text};
  }
`