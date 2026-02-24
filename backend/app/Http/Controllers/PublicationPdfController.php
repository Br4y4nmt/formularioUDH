<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facultad;
use App\Models\ProgramaAcademico;

class PublicationPdfController extends Controller
{
    public function generate(Request $request)
    {
        $validated = $request->validate([
            'selectedDegree' => 'nullable|string',
            'facultad_escuela' => 'nullable|integer',
            'escuela_carrera' => 'nullable',
            'programa_academico' => 'nullable',
            'titulo_otorga' => 'nullable|string',
            'grado_otorga'  => 'nullable|string',
            'authors' => 'nullable|array',
            'authors.*.full_name'  => 'nullable|string',
            'authors.*.doc_type'   => 'nullable|string',
            'authors.*.doc_number' => 'nullable|string',
            'authors.*.email'      => 'nullable|string',
            'advisors' => 'nullable|array',
            'advisors.*.full_name'  => 'nullable|string',
            'advisors.*.doc_type'   => 'nullable|string',
            'advisors.*.doc_number' => 'nullable|string',
            'advisors.*.orcid'      => 'nullable|string',
            'jurados' => 'nullable|array',
            'documentData' => 'nullable|array',
            'declaration_title' => 'nullable|string',
            'declaration_text'  => 'nullable|string',
            'fecha'             => 'nullable|string',
        ]);

        $defaults = [
            'selectedDegree' => null,

            'facultad_escuela' => '',
            'escuela_carrera' => '',
            'programa_academico' => '',

            'titulo_otorga' => '',
            'grado_otorga' => '',

            'authors' => [],
            'advisors' => [],
            'jurados' => [],
            'documentData' => [],

            'declaration_title' => '',
            'declaration_text' => '',
            'fecha' => now()->format('d \d\e F Y'),
        ];

        if (!empty($validated['facultad_escuela']) && is_numeric($validated['facultad_escuela'])) {
            $facultad = Facultad::find((int)$validated['facultad_escuela']);
            $validated['facultad_escuela'] = $facultad->nombre ?? $facultad->name ?? '';
        }
        if (empty($validated['escuela_carrera']) && !empty($validated['programa_academico'])) {
            $validated['escuela_carrera'] = $validated['programa_academico'];
        }

        if (!empty($validated['escuela_carrera']) && is_numeric($validated['escuela_carrera'])) {
            $programa = ProgramaAcademico::find((int)$validated['escuela_carrera']);
            $nombrePrograma = $programa->nombre ?? $programa->name ?? '';

            $validated['escuela_carrera'] = $nombrePrograma;
            $validated['programa_academico'] = $nombrePrograma; 
        } else {
            if (!empty($validated['escuela_carrera']) && is_string($validated['escuela_carrera'])) {
                $validated['programa_academico'] = $validated['escuela_carrera'];
            }
        }

        $data = array_merge($defaults, $validated);
        $data['documentData'] = $validated['documentData'] ?? [];
        $pdf = \PDF::loadView('pdf.publication', $data);

        $fileName = 'Formulario_autorizacion_derechos.pdf';

        return response($pdf->output(), 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', "inline; filename=\"{$fileName}\"");
    }
}