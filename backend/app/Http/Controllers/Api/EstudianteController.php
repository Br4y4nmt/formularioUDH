<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class EstudianteController extends Controller
{
    /**
     * Buscar estudiante por código universitario usando la API externa.
     * Espera parámetro `codigo` (10 dígitos).
     */
    public function buscar(Request $request)
    {
        // 1) Validación
        $validated = $request->validate([
            'codigo' => ['required', 'digits:10'],
        ]);

        $codigo = $validated['codigo'];

        // 2) URL externa (API UDH)
        $url = 'http://www.udh.edu.pe/websauh/secretaria_general/gradosytitulos/datos_estudiante_json.aspx?_c_3456='
            . urlencode($codigo);

        try {
            // 3) Petición HTTP con timeout y Accept JSON
            $response = Http::acceptJson()
                ->timeout(10)
                ->get($url);

            // 4) Si no fue 200-299
            if (!$response->successful()) {
                return response()->json([
                    'message' => 'Error al consultar la API externa.',
                    'status'  => $response->status(),
                ], 502);
            }

            // 5) Parse JSON
            $data = $response->json();

            /**
             * La API externa devuelve un ARRAY:
             * [
             *   { "stu_nombres": "...", ... }
             * ]
             * Normalizamos para devolver SOLO un objeto.
             */
            $student = null;

            if (is_array($data)) {
                // Caso típico: array de estudiantes (tomamos el primero)
                $student = $data[0] ?? null;
            } else {
                // Caso raro: viene como objeto
                $student = $data;
            }

            // 6) Si no hay datos
            if (empty($student) || !is_array($student)) {
                return response()->json([
                    'message' => 'No se encontraron datos para el código proporcionado.',
                ], 404);
            }

            // 7) Respuesta final: objeto estudiante
            return response()->json([
                'data' => $student,
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Excepción al conectar con la API externa.',
                'error'   => $e->getMessage(),
            ], 500);
        }
    }
}