import React from "react";

function AdvisorSection({ advisors, onAdvisorChange }) {
  const renderAdvisor = (advisor, index) => (
    <tbody key={index}>
      <tr>
        <td
          colSpan="6"
          style={{
            background: "#f7f8fa",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          {index === 0 ? "Asesor Metodológico" : "Asesor Técnico"}
        </td>
      </tr>

      <tr>
        <td className="label-cell">Apellidos y Nombres:</td>
        <td colSpan="5">
          <input
            type="text"
            name="full_name"
            value={advisor.full_name || ""}
            onChange={(e) => onAdvisorChange(index, e)}
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
              name={`doc_type_${index}`}
              value="dni"
              checked={advisor.doc_type === "dni"}
              onChange={(e) => onAdvisorChange(index, e)}
            />
            DNI
          </label>
        </td>

        <td>
          <label>
            <input
              type="radio"
              name={`doc_type_${index}`}
              value="pasaporte"
              checked={advisor.doc_type === "pasaporte"}
              onChange={(e) => onAdvisorChange(index, e)}
            />
            Pasaporte
          </label>
        </td>

        <td>
          <label>
            <input
              type="radio"
              name={`doc_type_${index}`}
              value="ce"
              checked={advisor.doc_type === "ce"}
              onChange={(e) => onAdvisorChange(index, e)}
            />
            C.E.
          </label>
        </td>

        <td>N° de documento:</td>

        <td>
          <input
            type="text"
            name="doc_number"
            value={advisor.doc_number || ""}
            onChange={(e) => onAdvisorChange(index, e)}
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
            value={advisor.orcid || ""}
            onChange={(e) => onAdvisorChange(index, e)}
            placeholder="https://orcid.org/0000-0000-0000-0000"
          />
        </td>
      </tr>
    </tbody>
  );

  return (
    <div className="section-card">
      <div className="section-title">
        <strong>3. Datos del Asesor:</strong>
        <span> (Ingrese sus datos según corresponda)</span>
      </div>

      <table className="form-table">
        {advisors.map((advisor, index) =>
          renderAdvisor(advisor, index)
        )}
      </table>
    </div>
  );
}

export default React.memo(AdvisorSection);