import styled from "styled-components";

export const DescriptionContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };

  h1 {
    display: flex;
    font-size: 15px;
    max-width: 200px;
    color: ${ ( { theme } ) => theme.text };
    padding: 0px 0px 0px 60px;
  }

  h3 {
    display: flex;
    font-size: 10px;
    padding: 0px 70px 0px 60px;
    font-weight: bold;
    color: ${ ( { theme } ) => theme.text };
  }
`