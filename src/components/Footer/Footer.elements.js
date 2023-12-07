import styled from "styled-components";

export const FooterContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  width: 50%;
  background: ${ ( { theme } ) => theme.bgc };
  padding: 5px 0px 5px 0px;
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

  textarea:focus::placeholder {
    opacity: 1;
  }

  textarea {
    border: none;
    outline: none;
    resize: none;
    font-size: 12px;
    width: 90%;
    height: 70px;
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

  textarea:focus {
    border: 2px solid ${ ( { theme } ) => theme.text};
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
`