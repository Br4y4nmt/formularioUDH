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
      margin-left: -30mm;  /* ajusta el valor aquí */
    }
    .header-center { position:absolute; left:100%; transform:translateX(-50%); top:0; bottom:0; margin:auto; text-align:center; font-size:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; }
    .header-center .university-title { font-weight:700; font-size:13px; white-space:nowrap; }
    .header-center .vice-title { font-size:11px; color:#666; white-space:nowrap; }
    h1 { font-size:14px; text-align:center; margin:4px 0; }
    .document-title { font-weight:700; font-size:12px; text-align:center; text-transform:uppercase; margin:8px 0 12px; line-height:1.15; }
    .auth-section { margin-top:6px; margin-bottom:6px; font-size:11px; }
    .auth-table { width:100%; border-collapse:collapse; font-size:11px; margin-top:4px; }
    .auth-table th, .auth-table td { border:1px solid #000; padding:6px; text-align:center; }
    .auth-table th { background:#dbeaf8; }
    .auth-table .x-cell { font-weight:700; }
    .auth-table td.filled { background:#dbeaf8; }
    .doc-box { width:12px; padding:2px; border:1px solid #000; text-align:center; vertical-align:middle; background:transparent; font-size:10px; }
    .doc-box.filled { font-weight:700; }
    .doc-box.wide { width:20px; }
    .doc-label { background:#dbeaf8; font-weight:700; text-align:center; vertical-align:middle; }
    table { width:100%; border-collapse:collapse; font-size:11px; }
    .t-bordered td, .t-bordered th { border:1px solid #000; padding:3px 6px; }
    .t-bordered td.label { background:#dbeaf8; font-weight:700; width:30%; }
    .t-bordered.small td:first-child { background:#dbeaf8; font-weight:700; }
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
    /* Boxed declaration with painted header (used in section 6) */
    .boxed { border:1px solid #000; }
    .boxed-header { background:#dbeaf8; padding:6px 8px; font-weight:700; }
    .boxed-header .table-note { font-weight:400; font-style:italic; margin-left:6px; }
    .boxed-content { padding:8px; }
    .boxed .declaration { border:none; padding:0; margin-top:6px; }
    .title-box { border:1px solid #000; height:18px; padding:3px 6px; box-sizing:border-box; width:100%; }
    .title-box .title-text { font-weight:700; display:block; width:100%; height:100%; overflow:hidden; }
    .sign-table td { border:1px solid #000; padding:4px; height:24px; }
    .sign-table td.label { background:#dbeaf8; font-weight:700; width:18%; }
    .sign-table td.name { padding:10px 8px; }
    .sign-table td.firma-label { background:#dbeaf8; text-align:center; width:8%; font-weight:700; }
    .sign-table td.signature { width:34%; height:24px; }
    .note { font-size:10px; margin-top:8px; }
    ul.notes { margin:6px 0 0 18px; }
    .top-lines { margin-top:-40px; text-align:center; font-size:10px; color:#444; margin-bottom:6px; }
    .top-lines .line { margin:2px 0; }
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

    <div class="top-lines">
      <div class="line">"Decenio de la Igualdad de Oportunidades para Mujeres y Hombres"</div>
      <div class="line">"Año de la Esperanza y el Fortalecimiento de la Democracia"</div>
    </div>

    <div class="document-title">AUTORIZACIÓN DE PUBLICACIÓN DIGITAL Y DECLARACIÓN JURADA DEL TRABAJO DE INVESTIGACIÓN, TESIS, TRABAJO DE SUFICIENCIA PROFESIONAL O TRABAJO ACADÉMICO PARA OPTAR UN GRADO O TÍTULO PROFESIONAL</div>

    <div class="auth-section">
      <strong>1. Autorización de Publicación:</strong> <em>(Marque con una "X" según corresponda)</em>
      <table class="auth-table">
        <tr>
          <th>Bachiller</th>
          <th>Título Profesional</th>
          <th>X</th>
          <th>Segunda Especialidad</th>
          <th>Maestro</th>
          <th>Doctor</th>
        </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="filled">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
      </table>
    </div>

    <div class="table-note">Ingrese los datos según corresponda.</div>
    <table class="t-bordered compact-table">
      <tr>
        <td class="label">Facultad/Escuela</td>
        <td>{{ $facultad_escuela ?? '' }}</td>
      </tr>
      <tr>
        <td class="label">Escuela/Carrera Profesional</td>
        <td>{{ $programa_academico ?? '' }}</td>
      </tr>
      <tr>
        <td class="label">Grado que otorga</td>
        <td>{{ $grado_otorga ?? '' }}</td>
      </tr>
      <tr>
        <td class="label">Título que otorga</td>
        <td>{{ $titulo_otorga }}</td>
      </tr>
    </table>

    <h2 style="font-size:10px; margin-top:10px;">2. Datos del (los) Autor(es): <span class="table-note">(Ingrese los datos según corresponda)</span></h2>

    <table class="t-bordered small compact-table" style="margin-top:-5px;">
      @foreach($authors as $a)
        @php $dt = strtolower($a['doc_type'] ?? $a['tipo_documento'] ?? ''); @endphp
        <tr>
          <td style="width:18%"><strong>Apellidos y Nombres:</strong></td>
          <td colspan="8">{{ $a['full_name'] ?? '' }}</td>
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
          <td style="width:10%;">{{ $a['doc_number'] ?? '' }}</td>
        </tr>
        <tr>
          <td><strong>Correo Electrónico:</strong></td>
          <td colspan="8">{{ $a['email'] ?? $a['correo'] ?? '' }}</td>
        </tr>
      @endforeach
    </table>
    
<h2 style="font-size:10px; margin-top:10px;">
  3. Datos del Asesor:
  <span class="table-note">(Ingrese los datos según corresponda)</span>
</h2>

@php
  $asesores = $advisors ?? [];
@endphp

@foreach($asesores as $index => $s)
  @php $dt = strtolower($s['doc_type'] ?? ''); @endphp

  <table class="t-bordered small compact-table" style="margin-top:4px;">
    
    {{-- Encabezado asesor --}}
    <tr>
      <td colspan="9" style="background:#f2f2f2; font-weight:700;">
        {{ $index == 0 ? 'Asesor Metodológico' : 'Asesor Técnico' }}
      </td>
    </tr>

    <tr>
      <td style="width:18%"><strong>Apellidos y Nombres:</strong></td>
      <td colspan="8">{{ $s['full_name'] ?? '' }}</td>
    </tr>

    <tr>
      <td><strong>Tipo de Documento:</strong></td>

      <td class="doc-label" style="width:8%">DNI</td>
      <td style="width:3%;" class="doc-box @if(strpos($dt,'dni') !== false) filled @endif">
        @if(strpos($dt,'dni') !== false) X @endif
      </td>

      <td class="doc-label" style="width:8%">Pasaporte</td>
      <td style="width:3%;" class="doc-box @if(strpos($dt,'pasaporte') !== false) filled @endif">
        @if(strpos($dt,'pasaporte') !== false) X @endif
      </td>

      <td class="doc-label" style="width:8%">C.E.</td>
      <td style="width:3%;" class="doc-box @if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) filled @endif">
        @if(strpos($dt,'c.e') !== false || strpos($dt,'ce') !== false) X @endif
      </td>

      <td class="doc-label" style="width:12%">
        <strong>N° de Documento:</strong>
      </td>

      <td style="width:10%;">
        {{ $s['doc_number'] ?? '' }}
      </td>
    </tr>

    <tr>
      <td><strong>ORCID ID:</strong></td>
      <td colspan="8">{{ $s['orcid'] ?? '' }}</td>
    </tr>

  </table>
@endforeach

<h2 style="font-size:10px; margin-top:10px;">4. Datos de los Jurados: <span class="table-note">(Ingrese los datos según corresponda, primero apellidos luego nombres)</span></h2>

      @php $j = $jurados ?? []; @endphp

      <table class="t-bordered small compact-table" style="margin-top:4px;">
        <tr>
          <td class="label" style="width:18%">Presidente</td>
          <td colspan="8">{{ $j[0]['name'] ?? '' }}</td>
        </tr>
        <tr>
          <td class="label">Secretario</td>
          <td colspan="8">{{ $j[1]['name'] ?? '' }}</td>
        </tr>
        <tr>
          <td class="label">Vocal</td>
          <td colspan="8">{{ $j[2]['name'] ?? '' }}</td>
        </tr>
        <tr>
          <td class="label">Accesitario</td>
          <td colspan="8">{{ $j[3]['name'] ?? '' }}</td>
        </tr>
      </table>

      <h2 style="font-size:10px; margin-top:5px;">5. Datos del Documento Digital a Publicar: <span class="table-note">(Ingrese los datos y marque con una "X" según corresponda)</span></h2>

      <table class="t-bordered small compact-table" style="margin-top:-5px;">
        <tr>
          <td colspan="8">Ingrese solo el año en el que sustentó su Trabajo de Investigación: <br><small>(Verifique la información en el Acta de Sustentación)</small></td>
          <td style="text-align:center; width:10%;">{{ $year ?? $anio ?? date('Y') }}</td>
        </tr>
        <tr>
          <td class="label">Modalidad de obtención del Grado Académico o Título Profesional:</td>
          <td class="doc-label">Trabajo de Investigación</td>
          <td class="doc-box wide"></td>
          <td class="doc-label">Tesis</td>
          <td class="doc-box wide"></td>
          <td class="doc-label">Trabajo Académico</td>
          <td class="doc-box wide"></td>
          <td class="doc-label">Trabajo de Suficiencia Profesional</td>
          <td></td>
        </tr>
        <tr>
          <td class="label">Palabras claves</td>
          <td colspan="8">{{ $palabras_claves ?? $keywords ?? '' }}</td>
        </tr>
        <tr>
          <td class="label">Tipo de acceso:</td>
          <td class="doc-label">Abierto</td>
          <td style="width:3%;" class="doc-box">@if(isset($access) && strtolower($access)=='abierto') X @endif</td>
          <td class="doc-label">Cerrado*</td>
          <td style="width:3%;" class="doc-box">@if(isset($access) && strtolower($access)=='cerrado') X @endif</td>
          <td class="doc-label">Restringido*</td>
          <td style="width:3%;" class="doc-box">@if(isset($access) && strtolower($access)=='restringido') X @endif</td>
          <td class="doc-label">Periodo de Embargo</td>
          <td style="width:10%;">{{ $periodo_embargo ?? '' }}</td>
        </tr>
        <tr>
          <td class="label">(*) Sustentar razón:</td>
          <td colspan="8">{{ $sustentar_razon ?? '' }}</td>
        </tr>
      </table>

      <h2 style="font-size:10px; margin-top:10px;">6. Declaración Jurada: (Ingrese todos los datos requeridos completos)</h2>

<table style="width:100%; border-collapse:collapse; margin-top:-5px;">
  
  {{-- Fila 1: Encabezado azul --}}
  <tr>
    <td style="background:#dbeaf8; border:1px solid #000; padding:6px 8px; font-weight:700;">
      Soy Autor (a) (es) del Trabajo de Investigación Titulado:
      <span style="font-weight:400; font-style:italic; margin-left:6px;">
        (Ingrese el título tal y como está registrado en el Acta de sustentación)
      </span>
    </td>
  </tr>

  {{-- Fila 2: Caja del título --}}
  <tr>
    <td style="border:1px solid #000; padding:4px 6px; font-weight:700; height:20px;">
      {{ strtoupper($work_title ?? $titulo_trabajo ?? $titulo ?? $titulo_otorga ?? '') }}
    </td>
  </tr>

  {{-- Fila 3: Declaración --}}
  <tr>
    <td style="border:1px solid #000; padding:8px; text-align:justify; line-height:1.4;">
      @php
        $default_declaration = "Mediante la presente asumo frente a la Universidad Nacional Hermilio Valdizán (en adelante LA UNIVERSIDAD), cualquier responsabilidad que pueda derivarse por la autoría, originalidad y veracidad del contenido del trabajo de investigación, así como por los derechos de la obra y/o invención presentada. En consecuencia, me hago responsable frente a LA UNIVERSIDAD y frente a terceros de cualquier daño que pudiera ocasionar a LA UNIVERSIDAD o a terceros, por el incumplimiento de lo declarado o que pudiera encontrar causas en los trabajos de investigación presentados, asumiendo toda la carga pecuniaria que pudiera derivarse de ello. Asimismo, por la presente me comprometo a asumir además todas las cargas pecuniarias que pudiera derivar para LA UNIVERSIDAD en favor de terceros con motivos de acciones, reclamaciones o conflictos derivados del incumplimiento de lo declarado o las que encontraran causa en el contenido del Trabajo de Investigación. De identificarse fraude, piratería, plagio, falsificación o que el trabajo haya sido publicado anteriormente; asumo las consecuencias y sanciones que de mis acciones se deriven, sometiéndome a las acciones legales y administrativas vigentes.";
      @endphp

      {!! nl2br(e($declaration_text ?? $default_declaration)) !!}
    </td>
  </tr>

</table>
</div>

    <h2 style="font-size:10px; margin-top:10px;">7. Autorización de Publicación Digital</h2>
    <div class="no-break">

    <div class="declaration" style="margin-bottom:6px; margin-top:-5px;">A través de la presente autorizo de manera gratuita a la Universidad Nacional Hermilio Valdizán a publicar la versión digital de este trabajo de investigación en su biblioteca virtual, repositorio institucional y base de datos.</div>

    <table class="t-bordered sign-table" style="margin-top:-5px; width:100%;">
      @for($i=0;$i<2;$i++)
        <tr>
          <td class="label">Apellidos y Nombres</td>
          <td class="name">{{ $authors[$i]['full_name'] ?? '' }}</td>
          <td class="firma-label">Firma</td>
          <td class="signature"></td>
        </tr>
      @endfor
    </table>

    <p style="margin-top:8px;"><strong>FECHA:</strong> {{ $fecha }}</p>
    <div class="signatures-row">

  <div class="signature-block">
    <div class="signature-line"></div>
    V°B° ASESOR(A)
  </div>

  <div class="signature-block">
    <div class="signature-line"></div>
    V°B° ASESOR(A)
  </div>

</div>
  </div>

  <div class="footer">
  Jr. Hermilio Valdizán N° 871 – Jr. Progreso N° 650 – Teléfonos: (062) 511-113<br>
  Telefax: (062) 513-154<br>
  Huánuco – Perú
</div>
</body>
</html>
