import styled from "styled-components";

export const FooterContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
  padding: 5px 0px 5px 0px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`

export const FooterWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 60px 20px 60px;
  align-items: center;
  width: 100%;

  p {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.text };
  }

  p.consult-title {
    margin-top: 10px;
  }

  p.consult-subtitle {
    margin: -20px 0px 5px 0px;
  }

  input::placeholder {
    opacity: 0;
  }

  input:focus::placeholder {
    opacity: 1;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 15px 0px 0px 0px;
  }

  div.form-container {
    width: 100%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }

  div.input-container {
    position: relative;
    width: 50%;
  }

  div.msj-container {
    position: relative;
    width: 100%;
  }

  input.input-text {
    background: none;
    color: ${ ( { theme } ) => theme.text };
    font-size: 10px;
    display: block;
    width: 80%;
    border: none;
    border-bottom: 1px solid ${ ( { theme } ) => theme.text};
  }

  input.input-text:focus {
    outline: none;
    color: ${ ( { theme } ) => theme.text};
  }

  label.lbl-text {
    font-size: 12px;
    position: absolute;
    color: ${ ( { theme } ) => theme.text};
    left: 5px;
    top: -1px;
    transition: 0.3s ease-in-out all;
    -webkit-transition: 0.3s ease-in-out all;
    -moz-transition: 0.3s ease-in-out all;
    -ms-transition: 0.3s ease-in-out all;
    -o-transition: 0.3s ease-in-out all;
    pointer-events: none;
  }

  input.input-text:focus~label.lbl-text,
  input.input-text:valid~label.lbl-text {
    top: -15px;
    font-size: 12px;
    color: ${ ( { theme } ) => theme.text};
  }

  label.lbl-msj {
    font-size: 12px;
    position: absolute;
    color: ${ ( { theme } ) => theme.text};
    left: 5px;
    top: 10px;
    transition: 0.3s ease-in-out all;
    -webkit-transition: 0.3s ease-in-out all;
    -moz-transition: 0.3s ease-in-out all;
    -ms-transition: 0.3s ease-in-out all;
    -o-transition: 0.3s ease-in-out all;
    pointer-events: none;
  }

  span {
    position: relative;
    display: block;
    width: 100%;
  }

  span::before {
    content: "";
    height: 2px;
    width: 0%;
    bottom: 0;
    position: absolute;
    background: ${ ( { theme } ) => theme.text};
    transition: ease 0.03s widht;
    -webkit-transition: ease 0.03s widht;
    -moz-transition: ease 0.03s widht;
    -ms-transition: ease 0.03s widht;
    -o-transition: ease 0.03s widht;
    left: 0;
  }

  input.input-text:focus~span.barra::before{
    width: 80%;
  }

  div#descripcion {
    /* margin: 0px 0px 15px 0; */
    width: 100%;
    margin: 0 0 15px 18px;
  }

  .description:focus::placeholder {
    opacity: 1;
  }

  .description {
    border: none;
    outline: none;
    resize: none;
    font-size: 12px;
    width: 90%;
    min-height: 3rem;
    background: none;
    border: 1px solid ${ ( { theme } ) => theme.text};
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    color: ${ ( { theme } ) => theme.text};
    margin-top: 5px;
    padding: 5px;
  }

  .description:focus {
    border: 2px solid ${ ( { theme } ) => theme.text};
  }

  .description:empty::before {
    position: absolute;
    content: "";
  }

  #description {
    display: none;
  }

  button {
    width: 70%;
    height: 8vw;
    max-height: 34px;
    max-width: 200px;
    background: ${ ( { theme } ) => theme.text};
    border: none;
    color: ${ ( { theme } ) => theme.bgc};
    display: block;
    margin: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 14px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
  }

  button:hover {
    box-shadow: 0px 0px 10px 1px #000000;
  }

  div.socialMedia-container {
    display: flex;
    flex-direction: row;
    padding: 10px 0px 0px 0px;
  }

  div.socialMedia-line {
    padding: 0px 10px 0px 10px;
  }

  div.socialMedia {
    padding: 0px 10px 0px 10px;
  }

  svg {
    color: ${ ( { theme } ) => theme.text };
    font-size: 35px;
  }

  @media (max-width: 769px) {
    div.consult {
      width: 130%;
    }

    form {
      width: 130%;
    }

    input.input-text {
      width: 90%;
    }

    div.description {
      width: 100%;
    }

    input.input-text:focus~span.barra::before{
      width: 90%;
    }

    button {
      width: 30%;
    }
  }

  @media (max-width: 426px) {
    div.consult {
      width: 190%;
    }

    p.consult-title {
      font-size: 11px;
      margin: auto;
    }

    p.consult-subtitle {
      font-size: 11px;
      margin: auto;
    }

    form {
      width: 200%;
    }

    div.form-container {
      flex-direction: column;
    }

    div.input-container {
      width: 100%;
      margin: 10px 0px 10px 0px;
    }

    input.input-text {
      width: 95%;
    }

    input.input-text:focus~span.barra::before{
      width: 95%;
    }

    button {
      font-size: 12px;
      width: 50%;
    }

    div.msj-container {
      margin: -10px 0px 0px 0px;
    }

    .description {
      font-size: 11px;
      width: 95%;
      height: auto;
    }

    div.socialMedia-line {
      padding: 0px 2px 0px 2px;
    }

    div.socialMedia {
      padding: 0px 2px 0px 2px;
    }

    svg {
      font-size: 24px;
    }
  }

  @media (max-width: 376px) {
    div.consult {
      width: 252%;
    }

    form {
      width: 250%;
    }
    
    div.input-container {
      width: 100%;
      margin: 10px 0px 10px 0px;
    }

    input.input-text {
      width: 100%;
    }

    input.input-text:focus~span.barra::before{
      width: 100%;
    }

    .description {
      width: 100%;
    }

    div.msj-container {
      margin: -10px 0px 0px 0px;
    }

    div.socialMedia-line {
      padding: 0px;
    }

    div.socialMedia {
      padding: 0px;
    }

    svg {
      font-size: 24px;
    }
  };

  @media (max-width: 321px) {
    div.consult {
      width: 420%;
    }

    p.consult-title {
      font-size: 10px;
      padding: 0px 10px;
    }

    p.consult-subtitle {
      font-size: 10px;
      padding: 0px 10px;
      margin: -20px 0px 0px 0px;
    }

    form {
      width: 350%;
    }

    input.input-text {
      font-size: 9px;
    }

    label.lbl-text {
      font-size: 10px;
    }

    input.input-text:focus~label.lbl-text,
    input.input-text:valid~label.lbl-text {
      top: -15px;
      font-size: 9px;
    }

    label.lbl-msj {
      font-size: 10px;
    }
    div.description {
      font-size: 9px;
    }

    button {
      font-size: 9px;
      width: 60%;
      margin-bottom: 0px;
    }

    svg {
      font-size: 20px;
    }
  };
`