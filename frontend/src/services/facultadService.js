import api from "./api";

export async function getFacultades(modId) {
  const res = await api.get("/api/facultades", {
    params: modId ? { mod_id: modId } : undefined,
    headers: { Accept: "application/json" },
  });
  const data = res.data;
  return Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : [];
}

export async function getProgramas(facultadId) {
  const res = await api.get("/api/programas", {
    params: { facultad_id: facultadId },
    headers: { Accept: "application/json" },
  });
  const data = res.data;
  return Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : [];
}

export default { getFacultades, getProgramas };
