import React from 'react';
import GraduationIcon from '../GraduationIcon';
import BuildingIcon from '../BuildingIcon';

function Header() {
  return (
    <div className="header-card">

      <div className="header-top">
        <div>UNIVERSIDAD DE HUÁNUCO</div>
        <div>VICERRECTORADO DE INVESTIGACION</div>
      </div>

      <div className="header-middle">

        <div className="logo-section">
          <img src="/formulario/images/Logo.png" alt="Logo Universidad" />
        </div>

        <div className="header-text">
          <p>"Decenio de la Igualdad de Oportunidades para Mujeres y Hombres"</p>
          <p>"Año de la Recuperación y Consolidación de la Economía Peruana"</p>
        </div>

        <div className="header-icons">
            <div className="icon blue">
            <GraduationIcon size={28} color="#39B49E" />
            </div>
            <div className="icon yellow">
            <BuildingIcon size={28} color="#EFB036" />
            </div>
        </div>

      </div>

      <div className="custom-divider"></div>

      <div className="header-title">
        <h2>Autorización de publicación</h2>
        <p>
          AUTORIZACIÓN DE PUBLICACIÓN DIGITAL Y DECLARACIÓN JURADA DEL TRABAJO DE
          INVESTIGACIÓN, TESIS, TRABAJO DE SUFICIENCIA PROFESIONAL O TRABAJO
          ACADÉMICO PARA OPTAR UN GRADO O TÍTULO PROFESIONAL
        </p>
      </div>
    </div>
  );
}
export default React.memo(Header);
