import React from "react";
import {
  WorkContainer,
  WorkWrapper
} from './Work.elements'

function Work(props) {

  let title = props.lenguage === 'spanish' ? <summary>EXPERIENCIA LABORAL</summary> : <summary>WORK EXPERIENCE</summary>

  return(
    <WorkContainer>
      <details>
        { title }
        <WorkWrapper>
          <ul className="timeline">
            <li className="event" data-date="MAR 2020 - OCT 2023">
              <h3>ADMINISTRATIVO SR.</h3>
              <h4>ANGA S.A.</h4>
              <ul className="work">
                <li className="work">
                  <p>Facturación en ERP y AFIP (Hacienda en España),</p>
                </li>
                <li className="work">
                  <p>Gestión Comercial y Atención al Cliente,</p>
                </li>
                <li className="work">
                  <p>Procesamiento y Planificación de Pedidos, y</p>
                </li>
                <li className="work">
                  <p>Gestión de Cuentas Corrientes y Cobranzas.</p>
                </li>             
              </ul>
            </li>
              
            <li className="event" data-date="MAY 2018 - OCT 2023">
              <h3>ADMINISTRATIVO SEMI SR.</h3>
              <h4>ANGA S.A.</h4>
              <ul className="work">
                <li className="work">
                  <p>Compras y Relacionamiento con Proveedores,</p>
                </li>
                <li className="work">
                  <p>Gestión de Cuentas Corrientes y Pago a Proveedores,</p>
                </li>
                <li className="work">
                  <p>Gestión de Costos y Actualización de Listas de Precios, y</p>
                </li>
                <li className="work">
                  <p>Control de caja y cheques, y confección de pagos aproveedores.</p>
                </li>             
              </ul>
              <ul className="awards">
                <p className="awards">Logros:</p>
                <li className="awards">
                  <p>Mejora, Estandarización y Escalabilidad en la Gestión de Costos (excel avanzado), y</p>
                </li>
                <li className="awards">
                  <p>Mejora en el Análisis Estratégico y Toma de Decisiones.</p>
                </li>
              </ul>
            </li>
            
            <li className="event" data-date="OCT 2017 - MAY 2018">
              <h3>VENDEDOR</h3>
              <h4>BANCO GALICIA</h4>
              <ul className="work">
                <li className="work">
                  <p>Trabajo basado en sistema de comisiones y premios,</p>
                </li>
                <li className="work">
                  <p>Captación de potenciales clientes,</p>
                </li>
                <li className="work">
                  <p>Venta de servicios financieros (tarjetas de crédito, cuentas bancarias y prestamos personales),</p>
                </li>
                <li className="work">
                  <p>Confección de legajos, vinculaciones, remitos y conformidades, y</p>
                </li>
                <li className="work">
                  <p>Cierre de contratos y gestión del envío de documentación.</p>
                </li>
              </ul>
            </li>

            <li className="event" data-date="DIC 2012 - JUL 2017">
              <h3>ADMINISTRATIVO JR.</h3>
              <h4>SOWA S.R.L.</h4>
              <ul className="work">
                <li className="work">
                  <p>Gestión del Personal (asistencia, licencias y productividad),</p>
                </li>
                <li className="work">
                  <p>Control de Producción, Stock y Materias Primas, y</p>
                </li>
                <li className="work">
                  <p>Gestión de Proveedores y Distribución Interna</p>
                </li>
              </ul>
            </li>
          </ul>
        </WorkWrapper>
      </details>
    </WorkContainer>
  )
}

export default Work;