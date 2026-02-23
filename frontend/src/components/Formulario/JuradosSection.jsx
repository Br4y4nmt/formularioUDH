import React from 'react';

function JuradosSection({ jurados, onJuradoChange }) {
  return (
    <div className="section-card">
      <div className="section-title-yellow">
        <strong>4. Datos de los Jurados:</strong>
        <span> (Ingrese sus datos según corresponda, primero apellidos luego nombre)</span>
      </div>

      <table className="form-table">
        <tbody>
          {jurados.map((j, idx) => (
            <tr key={idx}>
              <td className="label-cell">{j.role}</td>
              <td colSpan="5">
                <input
                  type="text"
                  value={j.name}
                  onChange={(e) => onJuradoChange(idx, e)}
                  placeholder="Apellidos y Nombres"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(JuradosSection);
