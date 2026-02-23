import React from 'react';

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
                    name="full_name"
                    value={author.full_name}
                    onChange={(e) => onAuthorChange(idx, e)}
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
                      name={`doc_type_${idx}`}
                      data-field="doc_type"
                      value="dni"
                      checked={author.doc_type === "dni"}
                      onChange={(e) => onAuthorChange(idx, e)}
                    />
                    DNI
                  </label>
                </td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name={`doc_type_${idx}`}
                      data-field="doc_type"
                      value="pasaporte"
                      checked={author.doc_type === "pasaporte"}
                      onChange={(e) => onAuthorChange(idx, e)}
                    />
                    Pasaporte
                  </label>
                </td>
                <td>
                  <label>
                    <input
                      type="radio"
                      name={`doc_type_${idx}`}
                      data-field="doc_type"
                      value="ce"
                      checked={author.doc_type === "ce"}
                      onChange={(e) => onAuthorChange(idx, e)}
                    />
                    C.E.
                  </label>
                </td>
                <td>N° de documento:</td>
                <td>
                  <input
                    type="text"
                    name="doc_number"
                    value={author.doc_number}
                    onChange={(e) => onAuthorChange(idx, e)}
                    maxLength={author.doc_type === "dni" ? 8 : undefined}
                    inputMode={author.doc_type === "dni" ? "numeric" : "text"}
                    pattern={author.doc_type === "dni" ? "\\d*" : undefined}
                    placeholder="N° de documento"
                  />
                </td>
              </tr>

              <tr>
                <td className="label-cell">Correo Electrónico:</td>
                <td colSpan="5">
                  <input
                    type="email"
                    name="email"
                    value={author.email}
                    onChange={(e) => onAuthorChange(idx, e)}
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
export default React.memo(AutorSection);
