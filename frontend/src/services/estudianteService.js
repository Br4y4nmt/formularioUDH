import api from './api';

/**
 * Buscar estudiante por código.
 * @param {string} codigo - Código universitario (10 dígitos)
 * @returns {Promise<object>} Datos del estudiante (objeto) o lanzará en error
 */
export async function buscarEstudiante(codigo) {
  if (!codigo) throw new Error('Código requerido');

  const res = await api.post(
    '/api/buscar-estudiante',
    { codigo },
    { headers: { Accept: 'application/json' } }
  );

  const data = res.data;
  // El backend puede devolver { data: { ... } } o directamente el objeto
  return data && (data.data || data);
}

export default { buscarEstudiante };
