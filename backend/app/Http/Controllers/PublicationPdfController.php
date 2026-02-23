<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PublicationPdfController extends Controller
{
    public function generate(Request $request)
    {
        $data = $request->validate([
            'facultad_name' => 'nullable|string',
            'programa_name' => 'nullable|string',
            'titulo_otorga'  => 'nullable|string',
            'authors'        => 'nullable|array',
            'authors.*.full_name' => 'nullable|string',
            'declaration_title' => 'nullable|string',
            'declaration_text'  => 'nullable|string',
            'fecha' => 'nullable|string',
        ]);

            // Accept flexible payload from frontend (many fields) — keep light validation
            $payload = $request->all();

            // Defaults
            $defaults = [
                'selectedDegree' => null,
                'facultad_escuela' => 'CIENCIAS ADMINISTRATIVAS Y TURISMO',
                'escuela_carrera' => null,
                'programa_academico' => 'CIENCIAS ADMINISTRATIVAS',
                'titulo_otorga' => 'LICENCIADO EN ADMINISTRACIÓN',
                'grado_otorga' => null,
                'authors' => [],
                'advisor' => null,
                'jurados' => [],
                'documentData' => [],
                'declaration_title' => '',
                'declaration_text' => '',
                'fecha' => now()->format('d \d\e F Y'),
            ];

            $data = array_merge($defaults, $payload);

        $pdf = \PDF::loadView('pdf.publication', $data);
        $fileName = 'autorizacion_publicacion_' . now()->format('Ymd_His') . '.pdf';

        // Return PDF binary directly (do not save to disk)
        $content = $pdf->output();

        return response($content, 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', "inline; filename=\"{$fileName}\"");
    }
}
