<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Autorización de Publicación</title>
  <style>
    body { font-family: DejaVu Sans, Arial, Helvetica, sans-serif; font-size: 11px; color: #111; }
    @page {
  margin: 35mm 30mm 18mm 30mm;
}

  body {
    margin: 0;
  }
    .header {
  position: fixed;
  top: -25mm;
  left: 30mm;
  right: 30mm;
  height: 20mm;
}
    .logo {
      width: 140px;
      margin-left: -30mm; 
    }
    .header-center { position:absolute; left:100%; transform:translateX(-50%); top:0; bottom:0; margin:auto; text-align:center; font-size:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; }
    .header-center .university-title { font-weight:700; font-size:13px; white-space:nowrap; }
    .header-center .vice-title { font-size:11px; color:#666; white-space:nowrap; }
    h1 { font-size:14px; text-align:center; margin:4px 0; }
    .document-title { font-weight:700; font-size:12px; text-align:center; text-transform:uppercase; margin:-30px 0 12px; line-height:1.15; }
    .auth-section { margin-top:6px; margin-bottom:6px; font-size:10px; }
    .auth-table { width:100%; border-collapse:collapse; font-size:10px; margin-top:4px; }
    .auth-table th, .auth-table td { border:1px solid #000; padding:3px 6px; text-align:center; }
    .auth-table th { background:#fcf3de; }
    .auth-table .x-cell { font-weight:700; }
    .doc-box { width:12px; padding:2px; border:1px solid #000; text-align:center; vertical-align:middle; background:transparent; font-size:10px; }
    .doc-box.filled { font-weight:700; }
    .doc-box.wide { width:20px; }
    .doc-label { background:#fcf3de; font-weight:700; text-align:center; vertical-align:middle; }
    table { width:100%; border-collapse:collapse; font-size:11px; }
    .t-bordered td, .t-bordered th { border:1px solid #000; padding:3px 6px; }
    .t-bordered td.label { background:#fcf3de; font-weight:700; width:30%; font-size:10px;}
    .t-bordered.small td:first-child { background:#fcf3de; font-weight:700; }
    .table-note { font-size:10px; font-style:italic; margin-bottom:0px; font-weight:normal; }
    .compact-table td,
    .compact-table th {
      padding:1.5px 4px;
      line-height:1.05;
    }
    .signatures-row {
      margin-top: 150px;
      width: 100%;
      text-align: center;
    }

    .signature-block {
      display: inline-block;
      width: 40%;
      text-align: center;
      vertical-align: top;
    }

    .signature-line {
      border-top: 1px solid #000;
      width: 70%;
      margin: 0 auto 5px auto;
    }
    .footer {
      position: fixed;
      bottom: -10mm;     
      left: 30mm;
      right: 30mm;
      text-align: center;
      font-size: 9px;
      color: #777777;    
      line-height: 1.4;
      white-space: nowrap; 
    }
    .small { font-size:10px; }
    .declaration { border:1px solid #000; padding:8px; text-align:justify; line-height:1.4; }
    .boxed { border:1px solid #000; }
    .boxed-header { background:#fcf3de; padding:6px 8px; font-weight:700; }
    .boxed-header .table-note { font-weight:400; font-style:italic; margin-left:6px; }
    .boxed-content { padding:8px; }
    .boxed .declaration { border:none; padding:0; margin-top:6px; }
    .title-box { border:1px solid #000; height:18px; padding:3px 6px; box-sizing:border-box; width:100%; }
    .title-box .title-text { font-weight:700; display:block; width:100%; height:100%; overflow:hidden; }
    .sign-table td { border:1px solid #000; padding:4px; height:24px; }
    .sign-table td.label { background:#fcf3de; font-weight:700; width:18%; }
    .sign-table td.name { padding:10px 8px; }
    .sign-table td.firma-label { background:#fcf3de; text-align:center; width:8%; font-weight:700; }
    .sign-table td.signature { width:14%; height:24px; }
    .note { font-size:10px; margin-top:8px; }
    ul.notes { margin:6px 0 0 18px; }
    .top-lines { margin-top:-40px; text-align:center; font-size:10px; color:#444; margin-bottom:6px; }
    .top-lines .line { margin:2px 0; }
    .page-break { page-break-before: always; break-before: page; }
  </style>
</head>
<body>
  <div class="header">
    <div><img src="{{ public_path('images/Logo.png') }}" class="logo" alt="logo"></div>
    <div class="header-center">
      <div class="university-title">UNIVERSIDAD DE HUÁNUCO</div>
      <div class="vice-title">VICERRECTORADO DE INVESTIGACIÓN</div>
    </div>
    <div style="width:110px"></div>
  </div>

  <div class="page">
    <div class="document-title">AUTORIZACIÓN DE PUBLICACIÓN DIGITAL Y DECLARACIÓN JURADA DEL TRABAJO DE INVESTIGACIÓN, TESIS, TRABAJO DE SUFICIENCIA PROFESIONAL O TRABAJO ACADÉMICO PARA OPTAR UN GRADO O TÍTULO PROFESIONAL</div>

    <div class="auth-section">
      <strong>1. Autorización de Publicación:</strong> <em>(Marque con una "X" según corresponda)</em>
      <table class="auth-table">
        <tr>
          <th>Bachiller</th>
          <th>Título Profesional</th>
          <th>Segunda Especialidad</th>
          <th>Maestro</th>
          <th>Doctor</th>
        </tr>
        @php $degree = $selectedDegree ?? ''; @endphp
          <tr>
          <td>@if($degree=='bachiller') X @endif</td>
          <td>@if($degree=='titulo') X @endif</td>
          <td>@if($degree=='segunda') X @endif</td>
          <td>@if($degree=='maestro') X @endif</td>
          <td>@if($degree=='doctor') X @endif</td>
        </tr>
      </table>
    </div>

    <div class="table-note" style="margin-top:-4px;">Ingrese los datos según corresponda.</div>
    <table class="t-bordered small compact-table">
      <tr>
        <td class="label">Facultad/Escuela:</td>
        <td>{{ strtoupper($facultad_escuela ?? '') }}</td>
      </tr>
      <tr>
        <td class="label">Escuela/Carrera Profesional:</td>
        <td>{{ strtoupper($escuela_carrera ?? $programa_academico ?? '') }}</td>
      </tr>
      <tr>
        <td class="label">Grado que otorga:</td>
        <td>{{ strtoupper($grado_otorga ?? '') }}</td>
      </tr>
      <tr>
        <td class="label">Título que otorga:</td>
        <td>{{ strtoupper($titulo_otorga ?? '') }}</td>
      </tr>
    </table>

    <h2 style="font-size:10px; margin-top:4px;">2. Datos del (los) Autor(es): <span class="table-note">(Ingrese los datos según corresponda)</span></h2>

    <table class="t-bordered small compact-table" style="margin-top:-5px;">
      @foreach($authors as $a)
        @php $dt = strtolower($a['doc_type'] ?? $a['tipo_documento'] ?? ''); @endphp
        <tr>
          <td style="width:18%"><strong>Apellidos y Nombres:</strong></td>
          <td colspan="8">{{ strtoupper($a['full_name'] ?? '') }}</td>
        </tr>
        <tr>
          <td><strong>Tipo de Documento:</strong></td>
          <td class="doc-label" style="width:8%">DNI</td>
          <td style="width:3%;" class="doc-box @if(strpos($dt,'dni') !== false) filled @endif">@if(strpos($dt,'dni') !== false) X @endif</td>
          <td class="doc-label" style="width:8%">Pasaporte</td>
          <td style="width:3%;" class="doc-box @if(strpos($dt,'pasaporte') !== false) filled @endif">@if(strpos($dt,'pasaporte') !== false) X @endif</td>
          <td class="doc-label" style="width:8%">C.E.</td>
          <td style="width:3%;" class="doc-box @if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) filled @endif">@if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) X @endif</td>
          <td class="doc-label" style="width:12%"><strong>N° de Documento:</strong></td>
          <td style="width:10%;">{{ strtoupper($a['doc_number'] ?? '') }}</td>
        </tr>
        <tr>
          <td><strong>Correo Electrónico:</strong></td>
          <td colspan="8">{{ $a['email'] ?? $a['correo'] ?? '' }}</td>
        </tr>
      @endforeach
    </table>
    
<h2 style="font-size:10px; margin-top:4px;">
  3. Datos del Asesor:
  <span class="table-note">(Ingrese los datos según corresponda)</span>
</h2>

@php
  $asesores = $advisors ?? [];
@endphp

<table class="t-bordered small compact-table" style="margin-top:-5px;">

@foreach($asesores as $index => $s)
  @php $dt = strtolower($s['doc_type'] ?? ''); @endphp

  <tr>
    <td colspan="9" style="background:#f2f2f2; font-weight:700;">
      {{ $index == 0 ? 'Asesor Metodológico' : 'Asesor Técnico' }}
    </td>
  </tr>

  <tr>
    <td style="width:18%"><strong>Apellidos y Nombres:</strong></td>
    <td colspan="8">{{ strtoupper($s['full_name'] ?? '') }}</td>
  </tr>

  <tr>
    <td><strong>Tipo de Documento:</strong></td>

    <td class="doc-label" style="width:8%">DNI</td>
    <td class="doc-box @if(strpos($dt,'dni') !== false) filled @endif">
      @if(strpos($dt,'dni') !== false) X @endif
    </td>

    <td class="doc-label" style="width:8%">Pasaporte</td>
    <td class="doc-box @if(strpos($dt,'pasaporte') !== false) filled @endif">
      @if(strpos($dt,'pasaporte') !== false) X @endif
    </td>

    <td class="doc-label" style="width:8%">C.E.</td>
    <td class="doc-box @if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) filled @endif">
      @if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) X @endif
    </td>

    <td class="doc-label" style="width:12%">
      <strong>N° de Documento:</strong>
    </td>

    <td style="width:10%;">
      {{ strtoupper($s['doc_number'] ?? '') }}
    </td>
  </tr>

  <tr>
    <td><strong>ORCID ID:</strong></td>
    <td colspan="8">{{ strtoupper($s['orcid'] ?? '') }}</td>
  </tr>

@endforeach

</table>


<h2 style="font-size:10px; margin-top:4px;">4. Datos de los Jurados: <span class="table-note">(Ingrese los datos según corresponda, primero apellidos luego nombres)</span></h2>

      @php $j = $jurados ?? []; @endphp

      <table class="t-bordered small compact-table" style="margin-top:-5px;">
        <tr>
          <td class="label" style="width:18%">Presidente</td>
          <td colspan="8">{{ strtoupper($j[0]['name'] ?? '') }}</td>
        </tr>
        <tr>
          <td class="label">Secretario</td>
          <td colspan="8">{{ strtoupper($j[1]['name'] ?? '') }}</td>
        </tr>
        <tr>
          <td class="label">Vocal</td>
          <td colspan="8">{{ strtoupper($j[2]['name'] ?? '') }}</td>
        </tr>
      </table>

      <h2 style="font-size:10px; margin-top:5px;">5. Datos del Documento Digital a Publicar: <span class="table-note">(Ingrese los datos y marque con una "X" según corresponda)</span></h2>

@php
    $doc = $documentData ?? [];
    $modalidad = $doc['modalidad'] ?? [];
    $acceso = $doc['tipo_acceso'] ?? [];
@endphp

<table class="t-bordered small compact-table" style="margin-top:-5px;">

  {{-- Año --}}
  <tr>
    <td colspan="8">
      Ingrese el año en el que sustentó:
      <small>(Verifique la información en el Acta de Sustentación)</small>
    </td>
    <td style="text-align:center; width:10%;">
      {{ $doc['year'] ?? date('Y') }}
    </td>
  </tr>

  {{-- Modalidad --}}
  <tr>
    <td class="label">
      Modalidad de obtención del Grado Académico o Título Profesional:
    </td>

    <td class="doc-label">Trabajo de Investigación</td>
    <td class="doc-box wide">
      @if(!empty($modalidad['trabajo_investigacion'])) X @endif
    </td>

    <td class="doc-label">Tesis</td>
    <td class="doc-box wide">
      @if(!empty($modalidad['tesis'])) X @endif
    </td>

    <td class="doc-label">Trabajo Académico</td>
    <td class="doc-box wide">
      @if(!empty($modalidad['trabajo_academico'])) X @endif
    </td>

    <td class="doc-label">Trabajo de Suficiencia Profesional</td>
    <td class="doc-box wide">
      @if(!empty($modalidad['trabajo_suficiencia'])) X @endif
    </td>
  </tr>

  {{-- Palabras clave --}}
  <tr>
    <td class="label">Palabras claves</td>
    <td colspan="8">
      {{ strtoupper($doc['palabras_clave'] ?? '') }}
    </td>
  </tr>

  {{-- Tipo de acceso --}}
  @php
    // Normalizar periodo/activo de embargo para mostrar en la plantilla
    $embargoActive = false;
    $embargoValue = $doc['embargo_periodo'] ?? '';

    if (!empty($acceso) && isset($acceso['embargo'])) {
      if (is_array($acceso['embargo'])) {
        $embargoActive = !empty($acceso['embargo']['activo']);
        $embargoValue = $embargoValue ?: ($acceso['embargo']['periodo'] ?? '');
      } else {
        $embargoActive = ($acceso['embargo'] === true || $acceso['embargo'] === '1' || $acceso['embargo'] == 1);
      }
    }

    if (!$embargoActive) {
      if (isset($doc['embargo']) && ($doc['embargo'] === true || $doc['embargo'] === '1' || $doc['embargo'] == 1)) $embargoActive = true;
      if (isset($doc['embargo_activo']) && ($doc['embargo_activo'] === true || $doc['embargo_activo'] === '1' || $doc['embargo_activo'] == 1)) $embargoActive = true;
    }

    // Prefer periodo sent explicitly
    $embargoValue = $embargoValue ?: ($acceso['embargo']['periodo'] ?? ($doc['embargo_periodo'] ?? ''));
    $embargoDisplay = '';
    if (!empty($embargoValue)) {
      $embargoDisplay = is_numeric($embargoValue) ? ($embargoValue . ' meses') : $embargoValue;
    }
  @endphp

  <tr>
    <td class="label">Tipo de acceso:</td>

    <td class="doc-label">Abierto</td>
    <td class="doc-box wide">
      @if(!empty($acceso['abierto'])) X @endif
    </td>

    <td class="doc-label">Cerrado*</td>
    <td class="doc-box wide">
      @if(!empty($acceso['cerrado'])) X @endif
    </td>

    <td class="doc-label">Restringido*</td>
    <td class="doc-box wide">
      @if(!empty($acceso['restringido'])) X @endif
    </td>

    <td class="doc-label">Periodo de Embargo</td>
    <td class="doc-box wide">
      @if($embargoActive) X @endif</span>
    </td>
  </tr>

  {{-- Sustentar razón --}}
  <tr>
    <td class="label">(*) Sustentar razón:</td>
    <td colspan="8">
      {{ strtoupper($doc['sustentar_razon'] ?? '') }}
    </td>
  </tr>

  {{-- Mensajes de tipo de acceso (mostrar después de Sustentar razón) --}}
  @php
      $border = '#1976d2';
      if(!empty($acceso['abierto'])) $border = '#2e7d32';
      elseif(!empty($acceso['cerrado'])) $border = '#d32f2f';
      elseif(!empty($acceso['restringido'])) $border = '#f57c00';
  @endphp

  @if(!empty($acceso['abierto']) || !empty($acceso['cerrado']) || !empty($acceso['restringido']) || $embargoActive)
  <tr>
    <td colspan="9" style="margin-top:8px; padding:4px 6px; background:#ffffff; border:1px solid #000000; border-radius:4px; font-size:10px; font-weight:400;">

        @if(!empty($acceso['abierto']))
          <div style="margin-bottom:2px;">El acceso abierto implica la disponibilidad libre y gratuita del texto completo en Internet, permitiendo su lectura, descarga y consulta sin restricciones técnicas, económicas o administrativas.</div>
          <div style="margin-bottom:2px;">Este principio se adopta en concordancia con las buenas prácticas nacionales e internacionales de acceso abierto promovidas por el sistema ALICIA, garantizando la visibilidad, preservación y difusión del conocimiento académico generado por la Universidad.</div>
        @endif

        @if(!empty($acceso['cerrado']))
          <div style="margin-bottom:6px;">Consiste en la no disponibilidad pública del texto completo, mostrando únicamente los metadatos.</div>
          <div style="margin-bottom:6px;">Procede únicamente cuando:</div>
          <ul style="margin:4px 0 6px 18px;">
            <li>Exista mandato legal expreso que impida su difusión.</li>
            <li>Se haya acreditado cesión exclusiva de derechos que prohíba su publicación.</li>
            <li>Exista impedimento jurídico debidamente sustentado.</li>
          </ul>
        @endif

        @if(!empty($acceso['restringido']))
          <div style="margin-bottom:6px;">Consiste en permitir el acceso únicamente a usuarios autorizados o a la comunidad universitaria.</div>
          <div style="margin-bottom:6px;">Procede cuando la tesis contenga:</div>
          <ul style="margin:4px 0 6px 18px;">
            <li>Datos personales sensibles.</li>
            <li>Información clínica identificable.</li>
          </ul>
        @endif

        @if($embargoActive)
          <div style="margin-bottom:6px;">Consiste en la restricción del acceso al texto completo por un plazo determinado, manteniéndose visibles los metadatos.</div>
          <div style="margin-bottom:6px;">Procede cuando:</div>
          <ul style="margin:4px 0 6px 18px;">
            <li>La tesis será sometida a publicación en revista científica que exija embargo.</li>
            <li>Exista proceso de patente o protección de propiedad intelectual en trámite.</li>
            <li>Medie convenio con cláusula de confidencialidad temporal.</li>
            <li>Existan razones académicas debidamente sustentadas.</li>
          </ul>
          @if(!empty($embargoDisplay))
            <div style="margin-top:6px;">
              <strong>Tiempo de Embargo:</strong> {{ strtoupper($embargoDisplay) }}
            </div>
          @endif
        @endif

    </td>
  </tr>
  @endif

</table>

  <div class="page-break"></div>
  <h2 style="font-size:10px; margin-top:0px;">6. Declaración Jurada:(Ingrese todos los datos requeridos completos)</h2>

<table style="width:100%; border-collapse:collapse; margin-top:-5px;">
    <tr>
    <td style="background:#fcf3de; border:1px solid #000; padding:6px 8px; font-weight:700; font-size:10px;">
      Soy Autor (a) (es) del Trabajo de Investigación Titulado:
      <span style="font-weight:400; font-style:italic; margin-left:-5px;">
      (Ingrese el título tal y como está registrado en el Acta de sustentación)
      </span>
    </td>
  </tr>
  <tr>
    <td style="border:1px solid #000; padding:6px; font-weight:700; box-sizing:border-box; white-space:normal; overflow-wrap:break-word; word-break:break-word; font-size:10px;">
      {{ strtoupper($declaration_title ?? '') }}
    </td>
  </tr>
  <tr>
    <td style="border:1px solid #000; padding:6px; text-align:justify; line-height:1.25; font-size:10px; vertical-align:top;">
      @php
        $default_declaration = "Por medio de este documento, declaro bajo juramento que el presente trabajo de investigación es de mi exclusiva autoría, original y veraz. Por tanto, asumo ante la Universidad de Huánuco toda responsabilidad sobre los derechos de la obra. Asimismo, eximo a la institución de cualquier reclamo legal o conflicto impulsado por terceros, comprometiéndome a cubrir los gastos o daños económicos que pudieran generarse por el incumplimiento de esta declaración. En caso de detectarse plagio, fraude, falsificación de datos o publicación previa, acepto someterme a las sanciones disciplinarias, administrativas y legales correspondientes.";
      @endphp

      <div style="max-height:110px; overflow:hidden;">
        {!! nl2br(e($declaration_text ?? $default_declaration)) !!}
      </div>
    </td>
  </tr>

</table>
</div>

    <h2 style="font-size:10px; margin-top:10px;">7. Autorización de Publicación Digital</h2>
    <div class="no-break">

    <div class="declaration" style="border:1px solid #000; padding:6px; text-align:justify; line-height:1.25; font-size:10px; vertical-align:top; margin-top:-6px;">Mediante el presente documento, otorgo mi consentimiento expreso y gratuito a la Universidad de Huánuco para que publique, difunda y ponga a disposición del público la versión digital de mi trabajo de investigación a través de su repositorio institucional, biblioteca virtual y bases de datos académicas.</div>

    <table class="t-bordered sign-table" style="margin-top:1px; width:100%;">
      @for($i=0;$i<2;$i++)
        <tr>
          <td class="label" style="width:35%" >Nombres completos del autor(a)</td>
          <td class="name">{{ strtoupper($authors[$i]['full_name'] ?? '') }}</td>
          <td class="firma-label">Firma</td>
          <td class="signature"></td>
        </tr>
      @endfor
    </table>

    <p style="margin-top:8px;"><strong>FECHA:</strong> {{ $fecha }}</p>
    <div class="signatures-row">

  @php
  $asesores = $advisors ?? [];
@endphp

<table style="width:100%; margin-top: 20px; text-align:center;">
  <tr>

    <td style="width:50%; vertical-align:top;">

      <div style="border-top:1px solid #000; width:70%; margin:0 auto 6px auto;"></div>

      @if(!empty($asesores[0]['full_name']))
        <div style="font-size:10px; font-weight:600;">
          {{ strtoupper($asesores[0]['full_name']) }}
        </div>
      @endif

      @if(!empty($asesores[0]['doc_number']))
        <div style="font-size:9px; color:#555;">
          DNI: {{ strtoupper($asesores[0]['doc_number'] ?? '') }}
        </div>
      @endif

      @if(!empty($asesores[0]['orcid']))
        <div style="font-size:9px; color:#555;">
          ORCID: {{ strtoupper($asesores[0]['orcid'] ?? '') }}
        </div>
      @endif

      <div style="margin-top:4px;">
        VoB ASESOR(A)
      </div>

    </td>

    <td style="width:50%; vertical-align:top;">

      <div style="border-top:1px solid #000; width:70%; margin:0 auto 6px auto;"></div>

      @if(!empty($asesores[1]['full_name']))
        <div style="font-size:10px; font-weight:600;">
          {{ strtoupper($asesores[1]['full_name']) }}
        </div>
      @endif

      @if(!empty($asesores[1]['doc_number']))
        <div style="font-size:9px; color:#555;">
          DNI: {{ strtoupper($asesores[1]['doc_number'] ?? '') }}
        </div>
      @endif

      @if(!empty($asesores[1]['orcid']))
        <div style="font-size:9px; color:#555;">
          ORCID: {{ strtoupper($asesores[1]['orcid'] ?? '') }}
        </div>
      @endif

      <div style="margin-top:4px;">
        VoB ASESOR(A)
      </div>

    </td>

  </tr>
</table>

</div>
  </div>

  <div class="footer">
  Ciudad Universitaria La Esperanza - Edificio 4 - 103 -
  Teléfonos: 969-507-208  /  952-068-664<br>
  Huánuco – Perú
</div>
</body>
</html>
