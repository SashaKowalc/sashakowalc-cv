import React from 'react';
import { 
  PorfolioContainer,
  PorfolioWrapper
} from './Porfolio.elements';
import proyecto01 from "../../assets/images/Clothes.jpg";
import proyecto02 from "../../assets/images/Calculadora.jpg";
import proyecto03 from "../../assets/images/Tareas.jpg";
import proyecto04 from "../../assets/images/Ferreteria.jpg";

function Porfolio(props) {

  let tittle = props.lenguage === 'spanish' ? <summary>PORFOLIO</summary> : <summary>PORFOLIO</summary>
  let photoText = props.lenguage === 'spanish' ? "Foto de Porfolio" : "Porfolio Picture";

  return (
    <PorfolioContainer>
      <details>
        { tittle }
        <PorfolioWrapper>
          <section className="product">
              <article className="product-article">
                <a href='https://github.com/SashaKowalc'>
                  <div className="product-photo">
                    <img img src={proyecto01} alt={photoText}></img>
                  </div>
                </a>
                  <div className="product-description">
                      <h2 className="product-description-title">Front y Back en .NET</h2>
                      <p className="product-description-detail">Ecommerce de ropa deportiva</p>
                  </div>
              </article>
              <article className="product-article">
                <a href='https://github.com/SashaKowalc/calculator'>
                  <div className="product-photo">
                    <img img src={proyecto02} alt={photoText}></img>
                  </div>
                </a>
                  <div className="product-description">
                      <h2 className="product-description-title">Front con REACT</h2>
                      <p className="product-description-detail">Calculadora</p>
                  </div>
              </article>
              <article className="product-article">
                <a href='https://github.com/SashaKowalc/task-app'>
                  <div className="product-photo">
                    <img img src={proyecto03} alt={photoText}></img>
                  </div>
                </a>
                  <div className="product-description">
                      <h2 className="product-description-title">Front con REACT</h2>
                      <p className="product-description-detail">Aplicación de Tareas</p>
                  </div>
              </article>
              <article className="product-article">
                <a href='https://github.com/SashaKowalc/mercadoliebre'>
                  <div className="product-photo">
                    <img img src={proyecto04} alt={photoText}></img>
                  </div>
                </a>
                  <div className="product-description">
                      <h2 className="product-description-title">Front y Back en NodeJS</h2>
                      <p className="product-description-detail">Ecommerce de Ferreteria</p>
                  </div>
              </article>
          </section>
        </PorfolioWrapper>
      </details>
    </PorfolioContainer>
  );
};

export default Porfolio;