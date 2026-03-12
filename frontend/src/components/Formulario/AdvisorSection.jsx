import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { openWhatsApp } from "../../services/contact";
import ButtonSpinner from "../ButtonSpinner";

function AdvisorSection({ advisors, onAdvisorChange, onBuscarDni, contactPhone = "51952068664", contactMessage = "Hola, necesito que registren a mi asesor/jurado en el formulario de autorización. Estos son sus datos:  " }) {

  const [dniInputs, setDniInputs] = useState({});
  const [loadingIndex, setLoadingIndex] = useState(null);
  const dniRefs = useRef({});

  const handleDniChange = (index, value) => {
    const clean = value.replace(/\D/g, "").slice(0, 8);
    setDniInputs(prev => ({ ...prev, [index]: clean }));
    const input = dniRefs.current[index];
    if (input) input.setCustomValidity("");
  };

  const handleBuscar = async (index) => {
    const dni = dniInputs[index] || "";
    // Si el campo DNI está vacío, mostrar validación nativa del input y no ejecutar la búsqueda
    if (!dni) {
      const input = dniRefs.current[index];
      if (input) {
        // establecer mensaje temporal y forzar reporte de validez
        input.setCustomValidity("Por favor complete el campo DNI.");
        input.reportValidity();
        // limpiar el custom validity en el siguiente tick para que la validación funcione después
        setTimeout(() => input.setCustomValidity(""), 0);
        input.focus();
        return;
      }

      window.alert("Por favor complete el campo DNI.");
      return;
    }

    // Validar longitud exacta de 8 dígitos
    if (dni.length !== 8) {
      const input = dniRefs.current[index];
      if (input) {
        input.setCustomValidity("El DNI debe tener 8 dígitos.");
        input.reportValidity();
        setTimeout(() => input.setCustomValidity(""), 0);
        input.focus();
        return;
      }

      window.alert("El DNI debe tener 8 dígitos.");
      return;
    }

    if (!onBuscarDni) return;

    setLoadingIndex(index);
    try {
      const result = onBuscarDni(index, dni);
      const resolved = result && typeof result.then === "function" ? await result : result;

      let found = false;
      if (resolved === true) {
        found = true;
      } else if (resolved && typeof resolved === "object") {
        found = true;
      } else {
        const current = advisors && advisors[index];
        if (current && (current.full_name || current.doc_number || current.orcid)) {
          found = true;
        }
      }

      if (!found) {
        const swalResult = await Swal.fire({
          icon: "warning",
          title: "Asesor no encontrado",
          text: "Asesor no encontrado, comuníquese con el área para agregar a su asesor.",
          confirmButtonText: "Comunicarse",
        });

        if (swalResult && swalResult.isConfirmed) {
          openWhatsApp(contactPhone, contactMessage);
        }
      }
    } catch (error) {
      console.error("Error buscando asesor:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al buscar el asesor.",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setLoadingIndex(null);
    }
  };

  const renderAdvisor = (advisor, index) => (
    <tbody key={index}>
      <tr>
        <td colSpan="6" className="advisor-header-cell">
          <span>
            {index === 0 ? "Asesor Metodológico" : "Asesor Técnico"}
          </span>

          <div className="advisor-actions">
            <input
              type="text"
              placeholder="DNI"
              value={dniInputs[index] || ""}
              onChange={(e) => handleDniChange(index, e.target.value)}
              className="advisor-dni-input"
              ref={(el) => (dniRefs.current[index] = el)}
              required
              inputMode="numeric"
              pattern="\d{8}"
              maxLength={8}
            />

            <button
              type="button"
              onClick={() => handleBuscar(index)}
              className="btn-search"
              disabled={loadingIndex === index}
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", minWidth: "80px", justifyContent: "center" }}
            >
              {loadingIndex === index ? <ButtonSpinner size={14} color="#fff" /> : null}
              {loadingIndex === index ? "Buscando" : "Buscar"}
            </button>
          </div>
        </td>
      </tr>

      <tr>
        <td className="label-cell" style={{ color: "#7a8290" }}>Apellidos y Nombres:</td>
        <td colSpan="5">
          <input
            type="text"
            value={advisor.full_name || ""}
            readOnly
            placeholder="Apellidos y Nombres"
            className="input-readonly"
          />
        </td>
      </tr>

      <tr>
        <td className="label-cell " style={{ color: "#7a8290" }}>Tipo de Documento:</td>

        <td>
          <label className="label-readonly">
            <input
              type="radio"
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "dni"}
              disabled
              onChange={() => {}}
            />
            DNI
          </label>
        </td>

        <td>
          <label className="label-readonly">
            <input
              type="radio"
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "pasaporte"}
              disabled
              onChange={() => {}}
            />
            Pasaporte
          </label>
        </td>

        <td>
          <label className="label-readonly">
            <input
              type="radio"
              name={`advisor_doc_type_${index}`}
              checked={advisor.doc_type === "ce"}
              disabled
              onChange={() => {}}
            />
            C.E.
          </label>
        </td>

        <td>N° de documento:</td>

        <td>
          <input
            type="text"
            value={advisor.doc_number || ""}
            readOnly
            placeholder="N° de documento"
            className="input-readonly"
          />
        </td>
      </tr>

      <tr>
        <td className="label-cell" style={{ color: "#7a8290" }}>ORCID:</td>
        <td colSpan="5">
          <input
            type="text"
            value={advisor.orcid || ""}
            readOnly
            placeholder="https://orcid.org/0000-0000-0000-0000"
            className="input-readonly"
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