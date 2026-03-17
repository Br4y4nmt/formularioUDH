import React, { useEffect } from 'react';
import CheckIcon from '../CheckIcon';

function DocumentSection({
  documentData,
  setDocumentData,
  toggleModalidad,
  selectTipoAcceso
}) {

  useEffect(() => {
    const ta = documentData?.tipo_acceso;
    const noneSelected =
      !ta ||
      (!ta.abierto && !ta.cerrado && !ta.restringido && !ta.embargo?.activo);

    if (noneSelected) {
      setDocumentData((p) => ({
        ...p,
        tipo_acceso: {
          abierto: true,
          cerrado: false,
          restringido: false,
          embargo: {
            ...(p?.tipo_acceso?.embargo || {}),
            activo: false,
          },
        },
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentData?.tipo_acceso, setDocumentData]);

  let mensajes = [];
  let colorBorde = "#1976d2";

  if (documentData.tipo_acceso.abierto) {
    mensajes.push(
      "El acceso abierto implica la disponibilidad libre y gratuita del texto completo en Internet, permitiendo su lectura, descarga y consulta sin restricciones técnicas, económicas o administrativas."
    );
    mensajes.push(
      "Este principio se adopta en concordancia con las buenas prácticas nacionales e internacionales de acceso abierto promovidas por el sistema ALICIA, garantizando la visibilidad, preservación y difusión del conocimiento académico generado por la Universidad."
    );
    colorBorde = "#2e7d32";
  }

  if (documentData.tipo_acceso.cerrado) {
    mensajes.push(
      "Consiste en la no disponibilidad pública del texto completo, mostrando únicamente los metadatos. De ser necesario, existe la opción de no registrar el resumen y, en aquellos casos donde el título contenga un dato que no se deba mostrar, se colocará en su lugar 'Título Reservado'. Esta restricción aplica a la difusión pública; la institución remitirá el texto completo internamente a la SUNEDU para su registro en el RENATI."
    );
    mensajes.push(
      <div>
        <div>Procede únicamente cuando:</div>
        <ul style={{ margin: '6px 0 0 18px' }}>
          <li>Exista un proceso de patente o protección de propiedad intelectual en trámite.</li>
          <li>Contenga información confidencial, de seguridad nacional o de cualquier índole de similar naturaleza que amerite la reserva de la información.</li>
          <li>Exista mandato legal expreso que impida su difusión.</li>
          <li>Se haya acreditado cesión exclusiva de derechos que prohíba su publicación.</li>
          <li>Exista impedimento jurídico debidamente sustentado.</li>
        </ul>
      </div>
    );
    colorBorde = "#d32f2f";
  }

  if (documentData.tipo_acceso.restringido) {
    mensajes.push(
      "Consiste en permitir el acceso únicamente a usuarios autorizados o a la comunidad universitaria, manteniéndose visibles los metadatos del trabajo; asimismo, se deberá publicar como mínimo la carátula y constancia de originalidad, y de ser el caso, el resumen correspondiente, conforme a lo establecido en el Reglamento RENATI."
    );
    mensajes.push(
      <div>
        <div>Procede de manera excepcional cuando la tesis contenga:</div>
        <ul style={{ margin: '6px 0 0 18px' }}>
          <li>Datos personales sensibles o información clínica identificable cuya anonimización o disociación resulte técnica o metodológicamente imposible sin destruir el valor académico, científico o de contexto de la obra.
</li>
            
                    <li>
              Información empresarial o estratégica sujeta a reserva (con convenios de confidencialidad vigentes). 

          </li>
          <li>
              Información cuya divulgación irrestricta pueda afectar derechos de terceros debidamente comprobados. 

          </li>
        
          
    
        </ul>
      </div>
    );
    colorBorde = "#f57c00";
  }

  if (documentData.tipo_acceso.embargo?.activo) {
    mensajes.push(
      "Consiste en la restricción del acceso al texto completo por un plazo determinado, manteniéndose visibles solo los metadatos y un archivo con la carátula y constancia de originalidad."
    );
    mensajes.push(
      <div>
        <div>Procede cuando:</div>
        <ul style={{ margin: '6px 0 0 18px' }}>
          <li>La tesis o trabajo de investigación será sometido a publicación en una revista científica o editorial que exija periodo de embargo.</li>
          
          <li>Medie convenio con cláusula de confidencialidad temporal.</li>
        </ul>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const yearVal = documentData.year || "";
  const isYearInvalid =
    yearVal.length === 4 &&
    (parseInt(yearVal, 10) < 2018 || parseInt(yearVal, 10) > currentYear);

  return (
    <div className="section-card">

      <div className="section-title">
        <strong>5. Datos del Documento Digital a Publicar:</strong>
        <span> (Ingrese sus datos y marque con un </span>
        <span style={{ display: 'inline-flex', verticalAlign: 'middle' }}>
          <CheckIcon size={14} />
        </span>
        <span> según corresponda)</span>
      </div>

      <table className="form-table">
        <tbody>
          <tr>
            <td className="label-cell">
              Ingrese solo el año en el que sustentó su Trabajo de Investigación:
              <span style={{ color: '#929292' }}>
                (Verifique la Información en el Acta de Sustentación)
              </span>
            </td>
            <td style={{ width: 120 }}>
              <input
                type="text"
                className="year-input"
                value={yearVal}
                maxLength={4}
                inputMode="numeric"
                style={isYearInvalid ? { borderColor: '#d32f2f', outline: 'none', boxShadow: '0 0 0 2px #d32f2f33' } : {}}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setDocumentData((p) => ({ ...p, year: value }));
                }}
              />
              {isYearInvalid && (
                <div style={{ color: '#d32f2f', fontSize: '11px', marginTop: 4, whiteSpace: 'nowrap' }}>
                  Solo entre 2018 y {currentYear}
                </div>
              )}
            </td>
          </tr>

          <tr>
            <td className="label-cell narrow-label">
              Modalidad de obtención del Grado Académico o Título Profesional:
              <span style={{ color: '#929292' }}>(Marque según corresponda)</span>
            </td>
            <td colSpan="5">
              <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
                {Object.keys(documentData.modalidad).map((key) => (
                  <label key={key} style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="checkbox"
                      checked={documentData.modalidad[key]}
                      onChange={() => toggleModalidad(key)}
                    />
                    {key.replaceAll("_", " ")}
                  </label>
                ))}
              </div>
            </td>
          </tr>

          <tr>
            <td className="label-cell narrow-label">
              Tipo de acceso:
              <span style={{ color: '#929292' }}>
                (Marque con X según corresponda)
              </span>
            </td>

            <td colSpan="5">
              <div style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>

                <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={documentData.tipo_acceso.abierto}
                    onChange={() => selectTipoAcceso('abierto')}
                  />
                  Abierto
                </label>

                <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={documentData.tipo_acceso.cerrado}
                    onChange={() => selectTipoAcceso('cerrado')}
                  />
                  Cerrado*
                </label>

                <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={documentData.tipo_acceso.restringido}
                    onChange={() => selectTipoAcceso('restringido')}
                  />
                  Restringido*
                </label>


                <label style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={!!documentData.tipo_acceso.embargo?.activo}
                    disabled={documentData.tipo_acceso.abierto}
                    onChange={() =>
                      setDocumentData((p) => ({
                        ...p,
                        tipo_acceso: {
                          abierto: false,
                          cerrado: false,
                          restringido: false,
                          embargo: {
                            ...p.tipo_acceso.embargo,
                            activo: !p.tipo_acceso.embargo?.activo
                          }
                        }
                      }))
                    }
                  />
                  Periodo de embargo
                </label>

              </div>
            </td>
          </tr>

        </tbody>
      </table>

      {mensajes.length > 0 && (
        <div className="access-messages" style={{ borderLeftColor: colorBorde }}>
          {mensajes.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}

          {(documentData.tipo_acceso.cerrado || documentData.tipo_acceso.restringido || documentData.tipo_acceso.embargo?.activo) && (
            <div style={{ marginTop: "14px" }}>
              <label style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
                Sustente la razón por la que solicita este tipo de acceso:
                <span style={{ color: '#d32f2f' }}> *</span>
              </label>
              <textarea
                rows={3}
                placeholder="Describa detalladamente el motivo por el cual requiere este tipo de acceso..."
                value={documentData.sustentar_razon || ""}
                onChange={(e) => {
                  const words = e.target.value.trim() === "" ? [] : e.target.value.trim().split(/\s+/);
                  if (words.length <= 40) {
                    setDocumentData((p) => ({ ...p, sustentar_razon: e.target.value }));
                  }
                }}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 6,
                  border: `1.5px solid ${colorBorde}`,
                  fontSize: 13,
                  resize: "vertical",
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
              <div style={{ fontSize: 11, color: (() => { const w = (documentData.sustentar_razon || "").trim() === "" ? 0 : (documentData.sustentar_razon || "").trim().split(/\s+/).length; return w >= 40 ? '#d32f2f' : '#888'; })(), textAlign: 'right', marginTop: 3 }}>
                {((documentData.sustentar_razon || "").trim() === "" ? 0 : (documentData.sustentar_razon || "").trim().split(/\s+/).length)} / 40 palabras
              </div>
            </div>
          )}

          {documentData.tipo_acceso.embargo?.activo && (
            <div style={{ display: "flex", gap: "20px", marginTop: "10px", alignItems: 'center' }}>
              <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px",
                  flexWrap: "wrap"
                }}>
                  <label style={{ whiteSpace: "nowrap", fontWeight: 500 }}>
                  Tiempo de Embargo por:
                </label>
                <select
                  className="select-modern"
                  style={{ width: "180px" }}
                  value={documentData.embargo_periodo ?? documentData.tipo_acceso.embargo?.periodo ?? ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDocumentData((p) => ({
                      ...p,
                      embargo_periodo: val,
                      tipo_acceso: {
                        ...p.tipo_acceso,
                        embargo: {
                          ...p.tipo_acceso.embargo,
                          periodo: val
                        }
                      }
                    }));
                  }}
                >
                  <option value="">Seleccione</option>
                  <option value="6">6 meses</option>
                  <option value="18">18 meses</option>
                  <option value="24">24 meses</option>
                </select>
                <label style={{ whiteSpace: "nowrap", fontWeight: 500 }}>
                  El periodo inicia desde la atención del Trámite correspondiente.
                </label>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default React.memo(DocumentSection);