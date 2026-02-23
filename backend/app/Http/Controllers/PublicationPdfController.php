<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PublicationPdfController extends Controller
{
    public function generate(Request $request)
    {
        $validated = $request->validate([

            'selectedDegree' => 'nullable|string',

            'facultad_escuela' => 'nullable|string',
            'escuela_carrera' => 'nullable|string',
            'programa_academico' => 'nullable|string',
            'titulo_otorga' => 'nullable|string',
            'grado_otorga' => 'nullable|string',
            'authors' => 'nullable|array',
            'authors.*.full_name' => 'nullable|string',
            'authors.*.doc_type' => 'nullable|string',
            'authors.*.doc_number' => 'nullable|string',
            'authors.*.email' => 'nullable|string',
            'advisors' => 'nullable|array',
            'advisors.*.full_name' => 'nullable|string',
            'advisors.*.doc_type' => 'nullable|string',
            'advisors.*.doc_number' => 'nullable|string',
            'advisors.*.orcid' => 'nullable|string',
            'jurados' => 'nullable|array',
            'documentData' => 'nullable|array',
            'declaration_title' => 'nullable|string',
            'declaration_text' => 'nullable|string',
            'fecha' => 'nullable|string',
        ]);

        $payload = $request->all();

        $defaults = [
            'selectedDegree' => null,

            'facultad_escuela' => 'CIENCIAS ADMINISTRATIVAS Y TURISMO',
            'escuela_carrera' => null,
            'programa_academico' => 'CIENCIAS ADMINISTRATIVAS',
            'titulo_otorga' => 'LICENCIADO EN ADMINISTRACIÓN',
            'grado_otorga' => null,

            'authors' => [],
            'advisors' => [], 
            'jurados' => [],
            'documentData' => [],

            'declaration_title' => '',
            'declaration_text' => '',

            'fecha' => now()->format('d \d\e F Y'),
        ];

        $data = array_merge($defaults, $payload);

        $pdf = \PDF::loadView('pdf.publication', $data);

        $fileName = 'Formulario autorizacion derechos';

        return response($pdf->output(), 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', "inline; filename=\"{$fileName}\"");
    }
}