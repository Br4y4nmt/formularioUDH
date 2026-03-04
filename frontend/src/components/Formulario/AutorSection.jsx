import React from "react";
import { buscarEstudiante } from "../../services/estudianteService";
import { showTopWarningToast, showTopErrorToast, showTopSuccessToast } from "../../utils/toast";

function AutorSection({ authors, onAuthorChange, onSearchCode }) {

  const handleBuscar = async (idx, code) => {
  const inputEl = document.querySelector(`input[name="author_code_${idx}"]`);
  const raw = (inputEl && inputEl.value) || code || "";
  const clean = String(raw).replace(/\D/g, "");

  if (clean.length !== 10) {
    showTopWarningToast(
      "Código inválido",
      "Ingrese un código universitario válido de 10 dígitos."
    );
    return;
  }

  try {
    const data = await buscarEstudiante(clean);
    const stu = data || {};

    const fullName = [stu.stu_apellido_paterno, stu.stu_apellido_materno, stu.stu_nombres]
      .filter(Boolean)
      .join(" ")
      .trim();

    if (!fullName && !stu.stu_dni && !stu.stu_codigo) {
      showTopWarningToast("Sin resultados", "No se encontraron datos para este código.");
      return;
    }

    if (fullName) onAuthorChange(idx, "full_name", fullName);

    if (stu.stu_dni) {
      onAuthorChange(idx, "doc_type", "dni");
      onAuthorChange(idx, "doc_number", stu.stu_dni);
    }

    if (stu.stu_codigo) {
      onAuthorChange(idx, "university_code", stu.stu_codigo);
      onAuthorChange(idx, "email", `${stu.stu_codigo}@udh.edu.pe`);
    }
    showTopSuccessToast("Estudiante encontrado", "Los datos fueron cargados correctamente");

  } catch (e) {
    const msg =
      e?.response?.data?.message ||
      e?.response?.data?.error ||
      e?.message ||
      "Error al buscar estudiante.";

    showTopErrorToast("Error al buscar", msg);
  }
};

  return (
    <div className="section-card">
      <div className="section-title-yellow">
        <strong>2. Datos del (los) Autor(es):</strong>
        <span> (Ingrese sus datos según corresponda)</span>
      </div>

      <table className="form-table">
        <tbody>
          {authors.map((author, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td className="label-cell" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ whiteSpace: "nowrap" }}>Apellidos y Nombres:</span>

                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <input
                      name={`author_code_${idx}`}
                      type="text"
                      value={author.university_code || ""}
                      onChange={(e) =>
                        onAuthorChange(idx, "university_code", e.target.value)
                      }
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="Código universitario (10 dígitos)"
                      style={{ width: 215}}
                    />

                    <button
                      type="button"
                      onClick={() => handleBuscar(idx, author.university_code)}
                      className="btn-search"
                    >
                      Buscar
                    </button>
                  </div>
                </td>

                <td colSpan="5" style={{ verticalAlign: "middle" }}>
                  <input
                    type="text"
                    value={author.full_name || ""}
                    onChange={(e) =>
                      onAuthorChange(idx, "full_name", e.target.value)
                    }
                    placeholder="Apellidos y Nombres"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>
              <tr>
                <td className="label-cell">Tipo de Documento:</td>

                <td>
                  <label>
                    <input
                      type="radio"
                      name={`author_doc_type_${idx}`}
                      checked={author.doc_type === "dni"}
                      onChange={() =>
                        onAuthorChange(idx, "doc_type", "dni")
                      }
                    />
                    DNI
                  </label>
                </td>

                <td>
                  <label>
                    <input
                      type="radio"
                      name={`author_doc_type_${idx}`}
                      checked={author.doc_type === "pasaporte"}
                      onChange={() =>
                        onAuthorChange(idx, "doc_type", "pasaporte")
                      }
                    />
                    Pasaporte
                  </label>
                </td>

                <td>
                  <label>
                    <input
                      type="radio"
                      name={`author_doc_type_${idx}`}
                      checked={author.doc_type === "ce"}
                      onChange={() =>
                        onAuthorChange(idx, "doc_type", "ce")
                      }
                    />
                    C.E.
                  </label>
                </td>

                <td>N° de documento:</td>

                <td>
                  <input
                    type="text"
                    value={author.doc_number || ""}
                    onChange={(e) =>
                      onAuthorChange(idx, "doc_number", e.target.value)
                    }
                    maxLength={author.doc_type === "dni" ? 8 : undefined}
                    inputMode={author.doc_type === "dni" ? "numeric" : "text"}
                    placeholder="N° de documento"
                  />
                </td>
              </tr>
              <tr>
                <td className="label-cell">Correo Electrónico:</td>
                <td colSpan="5">
                  <input
                    type="email"
                    value={author.email || ""}
                    onChange={(e) =>
                      onAuthorChange(idx, "email", e.target.value)
                    }
                    placeholder="Correo Electrónico"
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

export default AutorSection;