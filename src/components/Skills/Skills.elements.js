import styled from "styled-components";

export const SkillsContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };

  summary {
    color: ${ ( { theme } ) => theme.text};
    font-size: 12px;
    font-weight: 800px;
    margin: 5px 0px 0px 60px;
    cursor: pointer;
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
`