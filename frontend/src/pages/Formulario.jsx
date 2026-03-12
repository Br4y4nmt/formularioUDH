import React, { useState, useEffect, useCallback } from "react";
const API_BASE = import.meta.env.VITE_API_URL || '';
import { getFacultades, getProgramas } from "../services/facultadService";
import "./Formulario.css";
import CheckIcon from "../components/CheckIcon";
import Header from "../components/Formulario/Header";
import AutorSection from "../components/Formulario/AutorSection";
import AdvisorSection from "../components/Formulario/AdvisorSection";
import DegreeSection from "../components/Formulario/DegreeSection";
import JuradosSection from "../components/Formulario/JuradosSection";
import DocumentSection from "../components/Formulario/DocumentSection";
import DeclarationSection from "../components/Formulario/DeclarationSection";
import PublicationAuthSection from "../components/Formulario/PublicationAuthSection";
import {
  showTopSuccessToast,
  showTopErrorToast,
  showTopWarningToast
} from "../utils/toast";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre_completo: "",
    dni: "",
    correo: "",
    carrera: "",
    grado: "",
    modalidad: "",
    anio: "",
    palabras_clave: "",
    tipo_acceso: "",
    selectedDegree: "",
    facultad_escuela: "",
    escuela_carrera: "",
    titulo_otorga: "",
    grado_otorga: "",
    declaration_title: "",
    declaration_text: `Por medio de este documento, declaro bajo juramento que el presente trabajo de investigación es de mi exclusiva autoría, original y veraz. Por tanto, asumo ante la Universidad de Huánuco toda responsabilidad sobre los derechos de la obra. Asimismo, eximo a la institución de cualquier reclamo legal o conflicto impulsado por terceros, comprometiéndome a cubrir los gastos o daños económicos que pudieran generarse por el incumplimiento de esta declaración. En caso de detectarse plagio, fraude, falsificación de datos o publicación previa, acepto someterme a las sanciones disciplinarias, administrativas y legales correspondientes.`,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [facultades, setFacultades] = useState([]);
  const [programas, setProgramas] = useState([]);
  const [authors, setAuthors] = useState([
    { full_name: "", doc_type: "", doc_number: "", email: "" },
    { full_name: "", doc_type: "", doc_number: "", email: "" },
  ]);

  const [advisors, setAdvisors] = useState([
    { full_name: "", doc_type: "dni", doc_number: "", orcid: "" },
    { full_name: "", doc_type: "dni", doc_number: "", orcid: "" },
  ]);
  const [jurados, setJurados] = useState([
      { role: "Presidente", name: "" },
      { role: "Secretario", name: "" },
      { role: "Vocal", name: "" },
    ]);

  const [documentData, setDocumentData] = useState({
    year: "",
    modalidad: {
      trabajo_investigacion: false,
      tesis: false,
      trabajo_academico: false, 
      trabajo_suficiencia: false,
    },
    palabras_clave: "",
    tipo_acceso: {
      abierto: false,
      cerrado: false,
      restringido: false,
    },
    embargo_periodo: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleJuradoChange = useCallback((index, e) => {
    const value = e.target.value;
    setJurados((prev) => prev.map((j, i) => (i === index ? { ...j, name: value } : j)));
  }, []);

const toggleModalidad = useCallback((key) => {
  setDocumentData((prev) => ({
    ...prev,
    modalidad: {
      trabajo_investigacion: false,
      tesis: false,
      trabajo_academico: false, 
      trabajo_suficiencia: false,
      [key]: true
    },
  }));
}, []);

const selectTipoAcceso = useCallback((key) => {
  setDocumentData((prev) => ({
    ...prev,
    tipo_acceso: {
      abierto: false,
      cerrado: false,
      restringido: false,
      embargo: {
        activo: false,
        fecha_inicio: "",
        fecha_fin: ""
      },
      [key]: true
    }
  }));
}, []);


  const selectDegree = useCallback((key) => {
    setFormData((prev) => ({
      ...prev,
      selectedDegree: key,
      titulo_otorga: key === "bachiller" || key === "titulo" ? prev.titulo_otorga : "",
      grado_otorga: key === "segunda" || key === "maestro" || key === "doctor" ? prev.grado_otorga : "",
      escuela_carrera: "",
    }));
  }, []);


  const handleBuscarDniAsesor = async (index, dni) => {

  if (!dni || dni.length !== 8) {
    showTopWarningToast(
      "DNI inválido",
      "Ingrese un DNI válido de 8 dígitos"
    );
    return false;
  }

  try {

    const response = await fetch(`${API_BASE}/api/buscar-asesor-dni`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ dni })
    });

    const data = await response.json();

    if (!response.ok) {
      return false;
    }

    setAdvisors(prev =>
      prev.map((advisor, i) =>
        i === index
          ? {
              ...advisor,
              full_name: data.nombre,
              doc_type: "dni",
              doc_number: data.dni,
              orcid: data.orcid || ""
            }
          : advisor
      )
    );

    showTopSuccessToast(
      "Docente encontrado",
      "Los datos fueron cargados correctamente"
    );

    return true;

  } catch (error) {
    console.error("Error buscando docente:", error);

    showTopErrorToast(
      "Error del servidor",
      "No se pudo consultar la información del docente"
    );
    return false;
  }
};

  const handleBuscarDniJurado = async (index, dni) => {
    if (!dni || dni.length !== 8) {
      showTopWarningToast("DNI inválido", "Ingrese un DNI válido de 8 dígitos");
      return false;
    }

    try {
      const response = await fetch(`${API_BASE}/api/buscar-asesor-dni`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dni })
      });

      const data = await response.json();

      if (!response.ok) {
        return false;
      }

      setJurados(prev =>
        prev.map((j, i) =>
          i === index ? { ...j, name: data.nombre } : j
        )
      );

      showTopSuccessToast("Jurado encontrado", "Los datos fueron cargados correctamente");
      return true;

    } catch (error) {
      console.error("Error buscando jurado:", error);
      showTopErrorToast("Error del servidor", "No se pudo consultar la información del jurado");
      return false;
    }
  };

  useEffect(() => {
  const programaId = formData.escuela_carrera;
  const nivel = formData.selectedDegree;

  if (!programaId || !nivel) {
    setFormData(prev => ({
      ...prev,
      titulo_otorga: "",
      grado_otorga: ""
    }));
    return;
  }

  const fetchOtorga = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/programa/otorga`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          programa_id: programaId,
          nivel: nivel
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setFormData(prev => ({
          ...prev,
          titulo_otorga: "",
          grado_otorga: ""
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        titulo_otorga: data.titulo_otorga || "",
        grado_otorga: data.grado_otorga || ""
      }));

    } catch (error) {
      console.error("Error obteniendo grado:", error);
    }
  };

  fetchOtorga();

}, [formData.escuela_carrera, formData.selectedDegree]);
  useEffect(() => {
    const loadFacultades = async () => {
      try {
        const list = await getFacultades();
        setFacultades(list);
      } catch (err) {
        console.error("Error loading facultades", err);
      }
    };
    loadFacultades();
  }, []);

const handleFacultadChange = useCallback(async (e) => {
  const value = e.target.value;
  setFormData((prev) => ({ ...prev, facultad_escuela: value }));

  if (!value) {
    setProgramas([]);
    setFormData((prev) => ({ ...prev, escuela_carrera: "" }));
    return;
  }

  try {
    const list = await getProgramas(value);
    setProgramas(list);
    setFormData((prev) => ({ ...prev, escuela_carrera: "" }));
  } catch (err) {
    console.error("Error loading programas", err);
    setProgramas([]);
  }
}, []);

const handleAuthorChange = useCallback((index, name, value) => {
  setAuthors(prev =>
    prev.map((a, i) => {
      if (i !== index) return a;

      const updated = { ...a, [name]: value };

      if (name === "doc_type") {
        updated.doc_number = "";
      }

      if (name === "doc_number" && updated.doc_type === "dni") {
        updated.doc_number = value.replace(/\D/g, "").slice(0, 8);
      }

      return updated;
    })
  );
}, []);

const handleAdvisorChange = useCallback((index, name, value) => {
  setAdvisors(prev =>
    prev.map((advisor, i) => {
      if (i !== index) return advisor;

      const updated = { ...advisor, [name]: value };

      if (name === "doc_type") {
        updated.doc_number = "";
      }

      if (name === "doc_number" && updated.doc_type === "dni") {
        updated.doc_number = value.replace(/\D/g, "").slice(0, 8);
      }

      return updated;
    })
  );
}, []);
  const showGroupA =
    formData.selectedDegree === "bachiller" ||
    formData.selectedDegree === "titulo";
  const showGroupB =
    formData.selectedDegree === "segunda" ||
    formData.selectedDegree === "maestro" ||
    formData.selectedDegree === "doctor";
  const showFacultad = showGroupA || showGroupB;
  const anySelected = formData.selectedDegree !== "";
const validateForm = useCallback(() => {
  const errors = [];

  if (!formData.selectedDegree) {
    errors.push({ message: "Seleccione un grado académico", sectionId: "section-grado" });
  }

  if (!formData.facultad_escuela) {
    errors.push({ message: "Seleccione una facultad", sectionId: "section-grado" });
  }
  if (!formData.escuela_carrera) {
    errors.push({ message: "Seleccione un programa académico", sectionId: "section-grado" });
  }

  const validAuthors = authors.filter(
    (a) => a.full_name && a.doc_type && a.doc_number && a.email
  );
  if (validAuthors.length === 0) {
    errors.push({ message: "Complete los datos de al menos un autor", sectionId: "section-autores" });
  }

  advisors.forEach((advisor, i) => {
    const label = i === 0 ? "Metodológico" : "Técnico";
    if (!advisor.full_name || !advisor.doc_number) {
      errors.push({ message: `Complete los datos del Asesor ${label}`, sectionId: "section-asesores" });
    }
  });

  jurados.forEach((jurado) => {
    if (!jurado.name) {
      errors.push({ message: `Complete el nombre del ${jurado.role}`, sectionId: "section-jurados" });
    }
  });

  if (!documentData.year) {
    errors.push({ message: "Ingrese el año del documento", sectionId: "section-documento" });
  } else {
    const yearNum = parseInt(documentData.year, 10);
    const currentYear = new Date().getFullYear();
    if (documentData.year.length < 4 || yearNum < 2018 || yearNum > currentYear) {
      errors.push({ message: `El año debe estar entre 2018 y ${currentYear}`, sectionId: "section-documento" });
    }
  }

  const modalidadSelected = Object.values(documentData.modalidad).some((v) => v);
  if (!modalidadSelected) {
    errors.push({ message: "Seleccione una modalidad de trabajo", sectionId: "section-documento" });
  }

  const accesoSelected = Object.values(documentData.tipo_acceso).some((v) => v);
  if (!accesoSelected) {
    errors.push({ message: "Seleccione un tipo de acceso", sectionId: "section-documento" });
  }

  const requiereRazon = documentData.tipo_acceso.cerrado || documentData.tipo_acceso.restringido || documentData.tipo_acceso.embargo?.activo;
  if (requiereRazon && !documentData.sustentar_razon?.trim()) {
    errors.push({ message: "Sustente la razón del tipo de acceso seleccionado", sectionId: "section-documento" });
  }

  if (!formData.declaration_title) {
    errors.push({ message: "Ingrese el título del trabajo de investigación", sectionId: "section-declaracion" });
  }

  return errors;
}, [formData, authors, advisors, jurados, documentData]);

const handleGeneratePdf = useCallback(async () => {
  const validationErrors = validateForm();
  if (validationErrors.length > 0) {
    const first = validationErrors[0];
    showTopWarningToast("Campos incompletos", first.message);
    const el = document.getElementById(first.sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  try {

    setIsGenerating(true);


    const months = [
      'enero','febrero','marzo','abril','mayo','junio',
      'julio','agosto','setiembre','octubre','noviembre','diciembre'
    ];

    const today = new Date();
    const fecha = `Huánuco ${today.getDate()} de ${months[today.getMonth()]} del ${today.getFullYear()}`;

    const payload = {
      selectedDegree: formData.selectedDegree,
      facultad_escuela: formData.facultad_escuela,
      escuela_carrera: formData.escuela_carrera,
      programa_academico: formData.escuela_carrera,
      titulo_otorga: formData.titulo_otorga,
      grado_otorga: formData.grado_otorga,
      authors: authors.map(a => ({
        full_name: a.full_name,
        doc_type: a.doc_type,
        doc_number: a.doc_number,
        email: a.email,
        firma_path: a.firma_path || null
      })),
      advisors,
      jurados,
      documentData,
      declaration_title: formData.declaration_title,
      declaration_text: formData.declaration_text,
      fecha,
    };

    const res = await fetch(`${API_BASE}/api/pdf/publication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || "Error generando PDF");
    }

    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'Formulario_autorizacion_derechos.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);

    showTopSuccessToast("PDF generado correctamente");

  } catch (err) {

    console.error("Error generating PDF:", err);

    showTopErrorToast(
      "Error al generar PDF",
      err.message || "Intente nuevamente"
    );

  } finally {
    setIsGenerating(false);
  }

}, [formData, authors, advisors, jurados, documentData, validateForm]);

  return (
  <div className="form-container">

    <Header />

    <div id="section-grado">
      <DegreeSection
        formData={formData}
        selectDegree={selectDegree}
        facultades={facultades}
        programas={programas}
        handleFacultadChange={handleFacultadChange}
        handleChange={handleChange}
        showFacultad={showFacultad}
        showGroupA={showGroupA}
        showGroupB={showGroupB}
        anySelected={anySelected}
      />
    </div>

    <div id="section-autores">
      <AutorSection authors={authors} onAuthorChange={handleAuthorChange} />
    </div>

    <div id="section-asesores">
      <AdvisorSection
        advisors={advisors}
        onAdvisorChange={handleAdvisorChange}
        onBuscarDni={handleBuscarDniAsesor}
      />
    </div>

    <div id="section-jurados">
      <JuradosSection jurados={jurados} onJuradoChange={handleJuradoChange} onBuscarDni={handleBuscarDniJurado} />
    </div>

    <div id="section-documento">
      <DocumentSection
        documentData={documentData}
        setDocumentData={setDocumentData}
        toggleModalidad={toggleModalidad}
        selectTipoAcceso={selectTipoAcceso}
      />
    </div>

    <div id="section-declaracion">
      <DeclarationSection
        declaration_title={formData.declaration_title}
        declaration_text={formData.declaration_text}
        onChange={handleChange}
      />
    </div>

    <PublicationAuthSection
      authors={authors}
      onGeneratePdf={handleGeneratePdf}
      isGenerating={isGenerating}
    />
  </div>
);
}

export default Formulario;