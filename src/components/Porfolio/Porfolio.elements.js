import styled from "styled-components";

export const PorfolioContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  padding: 10px 0px 10px 0px;
  background: ${ ( { theme } ) => theme.bgc };

  summary {
    color: ${ ( { theme } ) => theme.text};
    font-size: 17px;
    font-weight: 800px;
    margin: 5px 0px 0px 60px;
    cursor: pointer;
  }
`

export const PorfolioWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 30px;

  section {
    width: fit-content;
    height: fit-content;
    margin: 10px 30px 0px 30px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
  };

  article {
    display: flex;
    width: 150px;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    background: #FFF;
  };

  article:hover {
    box-shadow: 0px 0px 10px 0px ${ ( { theme } ) => theme.text};
    cursor: pointer;
  };

  img { 
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin: 2px 0px;
  };

  .product-description {
    display: flex;
    border-top: 1px solid ${ ( { theme } ) => theme.text};
    flex-direction: column;
    align-items: center;
    margin: 5px 5px;
  };

  h2 {
    display: flex;
    font-size: 14px;
    color: ${ ( { theme } ) => theme.text };
  };

  p {
    display: flex;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.text };
  };

  
`