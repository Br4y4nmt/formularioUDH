import React from 'react';
import CheckIcon from '../CheckIcon';

function DegreeSection({
  formData,
  selectDegree,
  facultades,
  programas,
  handleFacultadChange,
  handleChange,
  showFacultad,
  showGroupA,
  showGroupB,
  anySelected,
}) {
  return (
    <div className="section-card">

      <div className="section-title">
        <strong>1. Autorización de Publicación:</strong>
        <span> (Marque según le corresponda)</span>
      </div>

      <table className="form-table">

        <thead>
          <tr>
            <th>Bachiller</th>
            <th>Título Profesional</th>
            <th className="x-column">X</th>
            <th>Segunda Especialidad</th>
            <th>Maestro</th>
            <th>Doctor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="degree-cell">
              <label className="degree-clickable">
                <input type="checkbox" className="hide-input" checked={formData.selectedDegree === 'bachiller'} onChange={() => selectDegree('bachiller')} />
                <span className={`degree-label ${formData.selectedDegree === 'bachiller' ? 'selected' : ''}`} onClick={() => selectDegree('bachiller')}>
                  {formData.selectedDegree === 'bachiller' ? <CheckIcon size={14} /> : null}
                </span>
              </label>
            </td>
            <td className="degree-cell">
              <label className="degree-clickable">
                <input type="checkbox" className="hide-input" checked={formData.selectedDegree === 'titulo'} onChange={() => selectDegree('titulo')} />
                <span className={`degree-label ${formData.selectedDegree === 'titulo' ? 'selected' : ''}`} onClick={() => selectDegree('titulo')}>
                  {formData.selectedDegree === 'titulo' ? <CheckIcon size={14} /> : null}
                </span>
              </label>
            </td>
            <td className="x-column"></td>
            <td className="degree-cell">
              <label className="degree-clickable">
                <input type="checkbox" className="hide-input" checked={formData.selectedDegree === 'segunda'} onChange={() => selectDegree('segunda')} />
                <span className={`degree-label ${formData.selectedDegree === 'segunda' ? 'selected' : ''}`} onClick={() => selectDegree('segunda')}>
                  {formData.selectedDegree === 'segunda' ? <CheckIcon size={14} /> : null}
                </span>
              </label>
            </td>
            <td className="degree-cell">
              <label className="degree-clickable">
                <input type="checkbox" className="hide-input" checked={formData.selectedDegree === 'maestro'} onChange={() => selectDegree('maestro')} />
                <span className={`degree-label ${formData.selectedDegree === 'maestro' ? 'selected' : ''}`} onClick={() => selectDegree('maestro')}>
                  {formData.selectedDegree === 'maestro' ? <CheckIcon size={14} /> : null}
                </span>
              </label>
            </td>
            <td className="degree-cell">
              <label className="degree-clickable">
                <input type="checkbox" className="hide-input" checked={formData.selectedDegree === 'doctor'} onChange={() => selectDegree('doctor')} />
                <span className={`degree-label ${formData.selectedDegree === 'doctor' ? 'selected' : ''}`} onClick={() => selectDegree('doctor')}>
                  {formData.selectedDegree === 'doctor' ? <CheckIcon size={14} /> : null}
                </span>
              </label>
            </td>
          </tr>

          {(anySelected ? showFacultad : true) && (
            <tr>
              <td className="label-cell">Facultad/Escuela:</td>
              <td colSpan="5">
                <select
                  className="table-select"
                  name="facultad_escuela"
                  value={formData.facultad_escuela}
                  onChange={handleFacultadChange}
                  disabled={!anySelected}
                  required
                >
                  <option value="" disabled>Seleccione Facultad</option>
                  {facultades.map((f) => (
                    <option key={f.id ?? f.value} value={f.id ?? f.value}>
                      {f.nombre ?? f.label ?? f.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          )}


            {(anySelected ? showGroupA : true) && (
              <>
                <tr>
                  <td className="label-cell">Escuela/Carrera Profesional:</td>
                  <td colSpan="5">
                    <select
                      className="table-select"
                      name="escuela_carrera"
                      value={formData.escuela_carrera}
                      onChange={handleChange}
                      disabled={!anySelected || !showGroupA || !formData.facultad_escuela}
                      required
                    >
                      <option value="" disabled>Seleccione Escuela/Carrera</option>
                      {programas.map((p) => (
                        <option key={p.id ?? p.value} value={p.id ?? p.value}>
                          {p.nombre ?? p.label ?? p.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td className="label-cell">Título Profesional otorgado:</td>
                  <td colSpan="5">
                    <input
                      type="text"
                      name="titulo_otorga"
                      value={formData.titulo_otorga}
                      readOnly
                      disabled={!anySelected || !showGroupA}
                      placeholder="Se completará automáticamente"
                    />
                  </td>
                </tr>
              </>
            )}

          {(anySelected ? showGroupB : true) && (
            <>
              <tr>
                <td className="label-cell">Escuela/Carrera Profesional:</td>
                <td colSpan="5">
                  <select
                    className="table-select"
                    name="escuela_carrera"
                    value={formData.escuela_carrera}
                    onChange={handleChange}
                    disabled={!anySelected || !showGroupB || !formData.facultad_escuela}
                    required
                  >
                    <option value="" disabled>Seleccione Escuela/Carrera</option>
                    {programas.map((p) => (
                      <option key={p.id ?? p.value} value={p.id ?? p.value}>
                        {p.nombre ?? p.label ?? p.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="label-cell">Grado que se le otorga:</td>
                <td colSpan="5">
                  <input
                      type="text"
                      name="grado_otorga"
                      value={formData.grado_otorga}
                      readOnly
                      disabled={!anySelected || !showGroupB}
                      placeholder="Se completará automáticamente"
                    />
                </td>
              </tr>
            </>
          )}

        </tbody>
      </table>

    </div>

  );
}

export default React.memo(DegreeSection);

