import styled from "styled-components";

export const PorfolioContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  padding: 5px 0px 5px 0px;
  background: ${ ( { theme } ) => theme.bgc };

  summary {
    color: ${ ( { theme } ) => theme.text};
    font-size: 17px;
    font-weight: 800px;
    margin: 5px 0px 0px 60px;
    cursor: pointer;
  }

  @media (max-width: 769px) {
    summary {
      font-size: 15px;
    }
  }

  @media (max-width: 426px) {
    summary {
      font-size: 13px;
      margin: auto;
      padding: 0px 0px 0px 15px;
    }
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
    width: 250px;
    height: 250px;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    background: ${ ( { theme } ) => theme.text };;
  };

  article:hover {
    box-shadow: 0px 0px 20px 0px ${ ( { theme } ) => theme.text};
    cursor: pointer;
  };

  img { 
    width: 120px;
    height: 190px;
    object-fit: cover;
    border-radius: 10px;
    margin: 2px 0px;
  };

  .product-description {
    display: flex;
    border-top: 1px solid ${ ( { theme } ) => theme.bgc};
    flex-direction: column;
    align-items: center;
    margin: 5px 5px;
  };

  h2 {
    display: flex;
    font-size: 14px;
    color: ${ ( { theme } ) => theme.bgc };
  };

  p {
    display: flex;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.bgc };
  };

  @media (max-width: 426px) {
    padding: 0px;

    article {
      width: 100%;
      height: 220px;
    };

    img { 
      width: 120px;
      height: 150px;
      object-fit: cover;
      border-radius: 10px;
      margin: 2px 0px;
    };

    .product-description {
      margin: 5px 5px;
    };

    h2 {
      font-size: 12px;
    };

    p {
      font-size: 10px;
    };
  };
`