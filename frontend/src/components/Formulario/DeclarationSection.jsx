import React from "react";

function DeclarationSection({ declaration_title, declaration_text, onChange }) {
  return (
    <div className="section-card">
      <div className="section-title-yellow">
        <strong>6. Declaración Jurada</strong>
        <span> · Ingrese todos los datos requeridos completos</span>
      </div>

      <table className="form-table">
        <tbody>
          <tr>
            <td colSpan="6" className="label-cell">
              Soy Autor (a) (es) del Trabajo de Investigación Titulado:{" "}
              <span style={{ color: "#6b7280" }}>
                (Ingrese el título tal y como está registrado en el Acta de
                Sustentación)
              </span>
            </td>
          </tr>

          <tr>
            <td colSpan="6">
              <input
                type="text"
                name="declaration_title"
                value={declaration_title}
                onChange={onChange}
                placeholder="Ingrese el título"
                className="wide-input"
              />
            </td>
          </tr>

          <tr>
            <td colSpan="6" className="label-cell">
              Declaración:
            </td>
          </tr>

          <tr>
            <td colSpan="6">
              <div className="declaration-box">
                {declaration_text}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(DeclarationSection);