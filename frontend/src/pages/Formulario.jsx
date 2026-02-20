import { useState } from "react";
import "./Formulario.css";
import GraduationIcon from "../components/GraduationIcon";
import BuildingIcon from "../components/BuildingIcon";


function Formulario() {
  const [formData, setFormData] = useState({
    nombre_completo: "",
    dni: "",
    correo: "",
    carrera: "",
    grado: "",
    modalidad: "",
    anio: "",
    palabras_clave: "",
    tipo_acceso: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  <div className="form-container">

    <div className="header-card">

      <div className="header-top">
        <div>UNIVERSIDAD DE HUÁNUCO</div>
        <div>SECRETARIADO VICERRECTORADO ACADÉMICO</div>
      </div>

      <div className="header-middle">

        <div className="logo-section">
          <img src="/images/Logo.png" alt="Logo Universidad" />
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

      <hr />

      <div className="header-title">
        <h2>Autorización de publicación</h2>
        <p>
          AUTORIZACIÓN DE PUBLICACIÓN DIGITAL Y DECLARACIÓN JURADA DEL TRABAJO DE
          INVESTIGACIÓN, TESIS, TRABAJO DE SUFICIENCIA PROFESIONAL O TRABAJO
          ACADÉMICO PARA OPTAR UN GRADO O TÍTULO PROFESIONAL
        </p>
      </div>

    </div>

  </div>
);
}

export default Formulario;