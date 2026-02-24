import React from 'react';
import CheckIcon from '../CheckIcon';

function DocumentSection({ documentData, setDocumentData, toggleModalidad, selectTipoAcceso }) {
  return (
    <div className="section-card">
      <div className="section-title">
        <strong>5. Datos del Documento Digital a Publicar:</strong>
        <span> (Ingrese sus datos y marque con un </span>
        <span style={{display:'inline-flex', verticalAlign:'middle'}}><CheckIcon size={14} /></span>
        <span> según corresponda)</span>
      </div>

      <table className="form-table">
        <tbody>
          <tr>
            <td className="label-cell">Ingrese solo el año en el que sustentó su Trabajo de Investigación: <span style={{ color: '#929292' }}>(Verifique la Información en el Acta de Sustentación)</span></td>
            <td style={{ width: 120 }}>
              <input
                type="text"
                name="year"
                className="year-input"
                value={documentData.year}
                maxLength={4}
                inputMode="numeric"
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setDocumentData((p) => ({ ...p, year: value }));
                }}
                
              />
            </td>
          </tr>

          <tr>
            <td className="label-cell narrow-label">Modalidad de obtención del Grado Académico o Título Profesional<br/>(Marque según corresponda)</td>
            <td colSpan="5">
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.modalidad.trabajo_investigacion} onChange={() => toggleModalidad('trabajo_investigacion')} />
                  Trabajo de Investigación
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.modalidad.tesis} onChange={() => toggleModalidad('tesis')} />
                  Tesis
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.modalidad.trabajo_suficiencia} onChange={() => toggleModalidad('trabajo_suficiencia')} />
                  Trabajo de Suficiencia Profesional
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    checked={documentData.modalidad.trabajo_academico}
                    onChange={() => toggleModalidad('trabajo_academico')}
                  />
                  Trabajo Académico
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td className="label-cell narrow-label">Tipo de acceso:<br/>(Marque con X según corresponda)</td>
            <td colSpan="5">
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.tipo_acceso.abierto} onChange={() => selectTipoAcceso('abierto')} />
                  Abierto
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.tipo_acceso.cerrado} onChange={() => selectTipoAcceso('cerrado')} />
                  Cerrado*
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input type="checkbox" checked={documentData.tipo_acceso.restringido} onChange={() => selectTipoAcceso('restringido')} />
                  Restringido*
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default React.memo(DocumentSection);
