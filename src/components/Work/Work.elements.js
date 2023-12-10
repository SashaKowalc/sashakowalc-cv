import styled from "styled-components";

export const WorkContainer = styled.div `
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

export const WorkWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 60px;

  ul.timeline {
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

  ul.timeline li.event {
    border-bottom: 1px dashed ${ ( { theme } ) => theme.text };
    padding-bottom: 5px;
    margin-bottom: 10px;
    position: relative;
  };

  ul.timeline li.event::after {
    box-shadow: 0 0 0 4px ${ ( { theme } ) => theme.text };
    left: -23px;
    background: ${ ( { theme } ) => theme.bgc };
    border-radius: 50%;
    height: 11px;
    width: 11px;
    top: 5px;
    content: "";
  };

  ul.timeline li.event::before {
    left: -160px;
    text-align: right;
    font-weight: 100;
    min-width: 120px;
    content: attr(data-date);
    color: ${ ( { theme } ) => theme.text };
  };

  ul.timeline li.event::before, ul li.event::after {
    position: absolute;
    display: block;
    top: 0;
    font-size: 11px;
  };

  ul.timeline li.event:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
    border: none;
  };

  ul.timeline li.event h3 {
    display: flex;
    font-size: 14px;
    color: ${ ( { theme } ) => theme.text };
  };

  ul.timeline li.event p {
    display: flex;
    font-size: 11px;
    color: ${ ( { theme } ) => theme.text };
    max-width: 450px;
  };

  ul.timeline li.event h4 {
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
  };
  
  @media (max-width: 426px) {
    width: 210px;

    ul.timeline {
      font-size: 10px;
      left: 8px;
      width: 190px;
    }

    ul.timeline li.event::before, ul li.event::after {
      font-size: 8px;
      content: "";
    }

    ul.timeline li.event h3 {
      font-size: 10px;
    };

    ul.timeline li.event p {
      font-size: 8px;
    };

    ul.timeline li.event h4 {
      font-size: 9px;
    };
  };

  @media (max-width: 376px) {
    width: 180px;

    ul.timeline {
      font-size: 9px;
      width: 95%;
    };

    ul.timeline li.event::before, ul li.event::after {
      font-size: 7px;
    };

    ul.timeline li.event h3 {
      font-size: 9px;
    };

    ul.timeline li.event p {
      font-size: 7px;
    };

    ul.timeline li.event h4 {
      font-size: 8px;
    };
  };

  @media (max-width: 321px) {
    width: 150px;
  };
`