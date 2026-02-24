import React, { useState } from "react";

function AdvisorSection({ advisors, onAdvisorChange, onBuscarDni }) {

  const [dniInputs, setDniInputs] = useState({});

  const handleDniChange = (index, value) => {
    const clean = value.replace(/\D/g, "").slice(0, 8);
    setDniInputs(prev => ({ ...prev, [index]: clean }));
  };

  const renderAdvisor = (advisor, index) => (
    <tbody key={index}>
      <tr>
        <td
          colSpan="6"
          style={{
            background: "#f7f8fa",
            fontWeight: "600",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 15px"
          }}
        >
          <span>
            {index === 0 ? "Asesor Metodológico" : "Asesor Técnico"}
          </span>

          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              placeholder="DNI"
              value={dniInputs[index] || ""}
              onChange={(e) => handleDniChange(index, e.target.value)}
              style={{
                width: 100,
                padding: "6px 8px",
                borderRadius: 6,
                border: "1px solid #cfd6dd"
              }}
            />

            <button
              type="button"
              onClick={() => onBuscarDni(index, dniInputs[index])}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                border: "none",
                background: "#39B49E",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 500
              }}
            >
              Buscar
            </button>
          </div>
        </td>
      </tr>

      <tr>
        <td className="label-cell">Apellidos y Nombres:</td>
        <td colSpan="5">
          <input
            type="text"
            value={advisor.full_name || ""}
            onChange={(e) =>
              onAdvisorChange(index, "full_name", e.target.value)
            }
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
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "dni"}
              onChange={() =>
                onAdvisorChange(index, "doc_type", "dni")
              }
            />
            DNI
          </label>
        </td>

        <td>
          <label>
            <input
              type="radio"
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "pasaporte"}
              onChange={() =>
                onAdvisorChange(index, "doc_type", "pasaporte")
              }
            />
            Pasaporte
          </label>
        </td>

        <td>
          <label>
            <input
              type="radio"
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "ce"}
              onChange={() =>
                onAdvisorChange(index, "doc_type", "ce")
              }
            />
            C.E.
          </label>
        </td>

        <td>N° de documento:</td>

        <td>
          <input
            type="text"
            value={advisor.doc_number || ""}
            onChange={(e) =>
              onAdvisorChange(index, "doc_number", e.target.value)
            }
            maxLength={advisor.doc_type === "dni" ? 8 : undefined}
            inputMode={advisor.doc_type === "dni" ? "numeric" : "text"}
            placeholder="N° de documento"
          />
        </td>
      </tr>

      <tr>
        <td className="label-cell">ORCID:</td>
        <td colSpan="5">
          <input
            type="url"
            value={advisor.orcid || ""}
            onChange={(e) =>
              onAdvisorChange(index, "orcid", e.target.value)
            }
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

export default AdvisorSection;