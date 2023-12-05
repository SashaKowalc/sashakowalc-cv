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
              <p>
                Facturación en ERP y AFIP (Hacienda en España),
                Gestión Comercial y Atención al Cliente,
                Procesamiento y Planificación de Pedidos, y
                Gestión de Cuentas Corrientes y Cobranzas.
              </p>
            </li>
              
            <li className="event" data-date="MAY 2018 - OCT 2023">
              <h3>ADMINISTRATIVO SEMI SR.</h3>
              <h4>ANGA S.A.</h4>
              <p>
                Compras y Relacionamiento con Proveedores,
                Gestión de Cuentas Corrientes y Pago a Proveedores,
                Gestión de Costos y Actualización de Listas de Precios, y
                Control de caja y cheques, y confección de pagos aproveedores.
                Logros:
                Mejora, Estandarización y Escalabilidad en la Gestiónde Costos (excel avanzado), y
                Mejora en el Análisis Estratégico y Toma deDecisiones.
              </p>
            </li>
            
            <li className="event" data-date="OCT 2017 - MAY 2018">
              <h3>VENDEDOR</h3>
              <h4>BANCO GALICIA</h4>
              <p>
                Trabajo basado en sistema de comisiones y premios,
                Captación de potenciales clientes,
                Venta de servicios financieros (tarjetas de crédito, cuentas bancarias y prestamos personales),
                Confección de legajos, vinculaciones, remitos yconformidades, y
                Cierre de contratos y gestión del envío dedocumentación.
              </p>
            </li>

            <li className="event" data-date="DIC 2012 - JUL 2017">
              <h3>ADMINISTRATIVO JR.</h3>
              <h4>SOWA S.R.L.</h4>
              <p>
                Gestión del Personal (asistencia, licencias y productividad),
                Control de Producción, Stock y Materias Primas, y
                Gestión de Proveedores y Distribución Interna
              </p>
            </li>
          </ul>
        </WorkWrapper>
      </details>
    </WorkContainer>
  )
}

export default Work;