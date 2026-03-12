import React, { useState, useRef } from 'react';
import Swal from "sweetalert2";
import { openWhatsApp } from "../../services/contact";
import ButtonSpinner from "../ButtonSpinner";

function JuradosSection({
  jurados,
  onJuradoChange,
  onBuscarDni,
  contactPhone = "51952068664",
  contactMessage = "Hola, necesito que registren a mi jurado en el formulario de autorización. Estos son sus datos:  "
}) {
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

    if (!dni) {
      const input = dniRefs.current[index];
      if (input) {
        input.setCustomValidity("Por favor complete el campo DNI.");
        input.reportValidity();
        setTimeout(() => input.setCustomValidity(""), 0);
        input.focus();
        return;
      }
      window.alert("Por favor complete el campo DNI.");
      return;
    }

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
        const current = jurados && jurados[index];
        if (current && current.name) found = true;
      }

      if (!found) {
        const swalResult = await Swal.fire({
          icon: "warning",
          title: "Jurado no encontrado",
          text: "Jurado no encontrado, comuníquese con el área para agregar a su jurado.",
          confirmButtonText: "Comunicarse",
        });
        if (swalResult && swalResult.isConfirmed) {
          openWhatsApp(contactPhone, contactMessage);
        }
      }
    } catch (error) {
      console.error("Error buscando jurado:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al buscar el jurado.",
        confirmButtonText: "Cerrar",
      });
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <div className="section-card">
      <div className="section-title-yellow">
        <strong>4. Datos de los Jurados:</strong>
        <span> (Ingrese los datos de los jurados que firmarón su acta de sustentación)</span>
      </div>

      <table className="form-table">
        <tbody>
          {jurados.map((j, idx) => (
            <React.Fragment key={idx}>
            <tr>
  <td colSpan="6" className="advisor-header-cell">
      <span className="advisor-role-text">{j.role}</span>

      <div className="advisor-actions">
        <input
          type="text"
          placeholder="DNI"
          value={dniInputs[idx] || ""}
          onChange={(e) => handleDniChange(idx, e.target.value)}
          className="advisor-dni-input"
          ref={(el) => (dniRefs.current[idx] = el)}
          inputMode="numeric"
          pattern="\d{8}"
          maxLength={8}
        />
        <button
          type="button"
          onClick={() => handleBuscar(idx)}
          className="btn-search"
          disabled={loadingIndex === idx}
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", minWidth: "80px", justifyContent: "center" }}
        >
          {loadingIndex === idx ? <ButtonSpinner size={14} color="#fff" /> : null}
          {loadingIndex === idx ? "Buscando" : "Buscar"}
        </button>
      </div>
  </td>
</tr>
              <tr>
                <td className="label-cell-jurados">Apellidos y Nombres:</td>
                <td colSpan="5">
                  <input
                    type="text"
                    value={j.name}
                    readOnly
                    placeholder="Apellidos y Nombres"
                    className="input-readonly"
                  />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(JuradosSection);
