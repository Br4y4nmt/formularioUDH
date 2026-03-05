import React from 'react';
import PrinterIcon from '../PrinterIcon';
import FileTextIcon from '../FileTextIcon';

function PublicationAuthSection({ authors = [], onGeneratePdf, isGenerating, isFormValid = false }) {
  const rows = [0, 1];

  return (
    <div className="section-card">
      <div className="section-title"><strong>7. Autorización de Publicación Digital</strong></div>

      <div className="declaration-box small-text" style={{ margin: 12 }}>
         Mediante el presente documento, otorgo mi consentimiento expreso y gratuito a la Universidad de Huánuco para que publique, difunda y ponga a disposición del público la versión digital de mi trabajo de investigación a través de su repositorio institucional, biblioteca virtual y bases de datos académicas.
      </div>

      <table className="form-table" style={{ margin: 12 }}>
        <thead>
          <tr>
            <th>Nombres completos del autor(a)</th>
            <th>Firma</th>
            <th>Firma Digital / Huella</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((i) => (
            <tr key={i}>
              <td style={{ textAlign: 'left', paddingLeft: 20 }}>
                {authors[i] && authors[i].full_name ? authors[i].full_name : ''}
              </td>
              <td>Firma</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="date-row">
        <div className="date-label">FECHA:</div>
        <input
          type="text"
          className="date-input"
          defaultValue={(() => {
            const today = new Date();
            const day = today.getDate();
            const month = today.getMonth();
            const year = today.getFullYear();
            const months = [
              'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
              'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'
            ];
            return `Huánuco ${day} de ${months[month]} del ${year}`;
          })()}
        />
      </div>

      <div className="note-box">
        <strong>Nota:</strong>
        <ul>
          
          <li>Cada uno de los datos requeridos en este formato, es de carácter obligatorio según corresponda.</li>
          <li>Se debe de imprimir, firmar y luego escanear el documento (legible).</li>
        </ul>
      </div>

     <div className="form-actions-wrapper">
  <div className="form-actions-row">

    <div className="form-actions-left">
      <button
        type="button"
        className="form-btn form-btn-pdf"
        onClick={onGeneratePdf}
        disabled={isGenerating || !isFormValid}
        style={{
          opacity: (isGenerating || !isFormValid) ? 0.7 : 1,
          cursor: (isGenerating || !isFormValid) ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8
        }}
      >
        {isGenerating ? (
          <>
            <span className="spinner"></span>
            Generando...
          </>
        ) : (
          <>
            <FileTextIcon size={16} />
            Generar PDF
          </>
        )}

      </button>
    </div>

  </div>

  <div className="form-actions-warning">
    Por favor complete todos los campos obligatorios (*)
  </div>
</div>
    </div>
  );
}

export default React.memo(PublicationAuthSection);
