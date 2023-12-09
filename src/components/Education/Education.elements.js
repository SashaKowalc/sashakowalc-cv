import styled from "styled-components";

export const EducationContainer = styled.div `
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
    font-size: 14px;
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
    font-size: 11px;
  };

  ul li:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  };

  ul li h3 {
    display: flex;
    font-size: 14px;
    color: ${ ( { theme } ) => theme.text };
  };

  ul li p {
    display: flex;
    font-size: 11px;
    color: ${ ( { theme } ) => theme.text };
  };

  ul li h4 {
    display: flex;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.text };
  };

  @media (max-width: 1025px) {
    padding: 0px;
    width: 350px;
  }

  @media (max-width: 769px) {
    width: 230px;

    ul.timeline {
      font-size: 11px;
    }

    ul.timeline li.event::before, ul li.event::after {
      font-size: 9px;
    }

    ul.timeline li.event h3 {
      font-size: 11px;
    };

    ul.timeline li.event p {
      font-size: 9px;
    };

    ul.timeline li.event h4 {
      font-size: 10px;
    };
  }
`