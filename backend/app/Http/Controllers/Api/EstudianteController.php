<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class EstudianteController extends Controller
{
    public function buscar(Request $request)
    {
        $validated = $request->validate([
            'codigo' => ['required', 'digits:10'],
        ]);

        $codigo = $validated['codigo'];

        $url = 'http://www.udh.edu.pe/websauh/secretaria_general/gradosytitulos/datos_estudiante_json.aspx?_c_3456='
            . urlencode($codigo);

        try {
            $response = Http::acceptJson()
                ->timeout(10)
                ->get($url);

            if (!$response->successful()) {
                $status = $response->status();
                $msg = 'Error al consultar la API externa.';
                if ($status >= 500) {
                    return response()->json([
                        'message' => 'Servidor en mantenimiento, vuelva a intentarlo en 5 minutos.',
                        'status'  => $status,
                    ], 503);
                }

                return response()->json([
                    'message' => $msg,
                    'status'  => $status,
                ], 502);
            }

            $data = $response->json();
            $student = null;

            if (is_array($data)) {
                $student = $data[0] ?? null;
            } else {
                $student = $data;
            }

            if (empty($student) || !is_array($student)) {
                return response()->json([
                    'message' => 'No se encontraron datos para el código proporcionado.',
                ], 404);
            }

            return response()->json([
                'data' => $student,
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Servidor en mantenimiento, vuelva a intentarlo en 5 minutos.',
                'error'   => $e->getMessage(),
            ], 503);
        }
    }
}