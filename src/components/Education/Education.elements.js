import styled from "styled-components";

export const EducationContainer = styled.div `
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

export const EducationWrapper= styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 60px;

  ul{
    border-left: 4px solid #4557bb;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: ${ ( { theme } ) => theme.bgc };
    margin: 10px auto;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 10px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    left: 150px;
  };

  ul li {
    border-bottom: 1px dashed ${ ( { theme } ) => theme.text };
    padding-bottom: 5px;
    margin-bottom: 10px;
    position: relative;
  };

  ul li::after {
    box-shadow: 0 0 0 4px ${ ( { theme } ) => theme.text };
    left: -23px;
    background: ${ ( { theme } ) => theme.bgc };
    border-radius: 50%;
    height: 11px;
    width: 11px;
    top: 5px;
    content: "";
  };

  ul li::before {
    left: -160px;
    text-align: right;
    font-weight: 100;
    min-width: 120px;
    content: attr(data-date);
    color: ${ ( { theme } ) => theme.text };
  };

  ul li::before, ul li::after {
    position: absolute;
    display: block;
    top: 0;
  };

  ul li:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  };

  ul li h3 {
    display: flex;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.text };
  };

  ul li p {
    display: flex;
    font-size: 8px;
    color: ${ ( { theme } ) => theme.text };
  };

  ul li h4 {
    display: flex;
    font-size: 10px;
    color: ${ ( { theme } ) => theme.text };
  };
`