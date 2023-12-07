import React from 'react';
import { 
  FooterContainer,
  FooterWrapper
} from './Footer.elements';
import { TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialAtCircular } from "react-icons/ti";
import { MdLinearScale } from "react-icons/md";


function Footer (props) {

  let title = props.lenguage === 'spanish' ? <p className='consult-title'>¿Tienes preguntas o simplemente quieres saludar? ¡No dudes en ponerte en contacto! Tu consulta es importante, y estoy aquí para responder rápidamente. ¡Envía un correo o un mensaje de WhatsApp y conversemos pronto!</p> : <h3>Do you have questions or just want to say hello? Don't hesitate to get in touch! Your inquiry is important, and I'm here to respond quickly - send me an email or WhatsApp message and let's chat soon!</h3>;
  let name = props.lenguage === 'spanish' ? <label for="nombre" className="lbl-text">NOMBRE</label> : <label for="nombre" className="lbl-text">NAME</label>;
  let message = props.lenguage === 'spanish' ? <label for="mensaje" className="lbl-msj">TU MENSAJE</label> : <label for="mensaje" className="lbl-msj">YOUR MESSAGE</label>;
  let button = props.lenguage === 'spanish' ? <button type="submit">ENVIAR</button> : <button type="submit">SEND</button>;

  return (
    <FooterContainer>
      <FooterWrapper>
        <div className='consult'>
          { title }
          <br/>
          <p className='consult-subtitle'>sasha.nahuelk@gmail.com / +34 610 92 98 91</p>
        </div>
          <form action='https://formsubmit.co/sasha.nahuelk@gmail.com' method='POST' className='consult-form'>
            <div className='form-container'>
              <div className="input-container">
                <input required type="text" className="input-text" name="nombre"/><span className="barra"></span>
                { name }
              </div>
              <div className="input-container">
                <input required type="email" className="input-text" name="email"/><span className="barra"></span>
                <label for="email" className="lbl-text">E-MAIL</label>
              </div>
              <div className="msj-container">
                { message } <br/>
                <textarea className='description' name="mensaje"></textarea>
              </div>
              { button }
            </div>
          </form>

        <div className='socialMedia-container'>
          <div className='socialMedia-line'>
            < MdLinearScale />
          </div>
          <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/sasha-nahuel/'>< TiSocialLinkedinCircular /></a>
          </div>
          <div className='socialMedia'>
            <a href='https://github.com/SashaKowalc'>< TiSocialGithubCircular /></a>
          </div>
          <div className='socialMedia'>
            <a href='https://www.instagram.com/sashakowalczuk/'>< TiSocialInstagramCircular /></a>
          </div>
          <div className='socialMedia'>
            <a href='https://www.facebook.com/sasha.nahuel/'>< TiSocialFacebookCircular /></a>
          </div>
          <div className='socialMedia'>
            <a href='mailto:sasha.nahuelk@gmail.com?Subject=Contacto%20Web'>< TiSocialAtCircular /></a>
          </div>
          <div className='socialMedia-line'>
            < MdLinearScale />
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;