import React from 'react';

function AdvisorSection({ advisor, onAdvisorChange }) {
  return (
    <div className="section-card">
      <div className="section-title">
        <strong>3. Datos del Asesor:</strong>
        <span> (Ingrese sus datos según corresponda)</span>
      </div>

      <table className="form-table">
        <tbody>
          <tr>
            <td className="label-cell">Apellidos y Nombres:</td>
            <td colSpan="5">
              <input
                type="text"
                name="full_name"
                value={advisor.full_name}
                onChange={(e) => onAdvisorChange(e)}
                placeholder="Apellidos y Nombres"
              />
            </td>
          </tr>

          <tr>
            <td className="label-cell">Tipo de Documento:</td>
            <td>
              <label>
                <input
                  type="radio"
                  name="doc_type"
                  value="dni"
                  checked={advisor.doc_type === "dni"}
                  onChange={onAdvisorChange}
                />
                DNI
              </label>
            </td>
            <td>
              <label>
                <input
                  type="radio"
                  name="doc_type"
                  value="pasaporte"
                  checked={advisor.doc_type === "pasaporte"}
                  onChange={onAdvisorChange}
                />
                Pasaporte
              </label>
            </td>
            <td>
              <label>
                <input
                  type="radio"
                  name="doc_type"
                  value="ce"
                  checked={advisor.doc_type === "ce"}
                  onChange={onAdvisorChange}
                />
                C.E.
              </label>
            </td>
            <td>N° de documento:</td>
            <td>
              <input
                type="text"
                name="doc_number"
                value={advisor.doc_number}
                onChange={onAdvisorChange}
                maxLength={advisor.doc_type === "dni" ? 8 : undefined}
                inputMode={advisor.doc_type === "dni" ? "numeric" : "text"}
                pattern={advisor.doc_type === "dni" ? "\\d*" : undefined}
                placeholder="N° de documento"
              />
            </td>
          </tr>

          <tr>
            <td className="label-cell">ORCID:</td>
            <td colSpan="5">
              <input
                type="url"
                name="orcid"
                value={advisor.orcid}
                onChange={onAdvisorChange}
                placeholder="https://orcid.org/0000-0000-0000-0000"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(AdvisorSection);
