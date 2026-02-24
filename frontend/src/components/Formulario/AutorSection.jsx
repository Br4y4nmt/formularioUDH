import React from "react";

function AutorSection({ authors, onAuthorChange }) {
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
                <td className="label-cell">Apellidos y Nombres:</td>
                <td colSpan="5">
                  <input
                    type="text"
                    value={author.full_name || ""}
                    onChange={(e) =>
                      onAuthorChange(idx, "full_name", e.target.value)
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