<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProgramaGrado;

class ProgramaGradoController extends Controller
{
    public function getOtorga(Request $request)
    {
        $request->validate([
            'programa_id' => 'required|integer',
            'nivel' => 'required|string|in:bachiller,titulo,segunda,maestro,doctor',
        ]);

        $row = ProgramaGrado::where('programa_id', $request->programa_id)
            ->where('nivel', $request->nivel)
            ->first();

        if (!$row) {
            return response()->json([
                'message' => 'No se encontró configuración para este programa y nivel.',
            ], 404);
        }

        return response()->json([
            'programa_id' => $row->programa_id,
            'nivel' => $row->nivel,
            'grado_otorga' => $row->grado_otorga,
            'titulo_otorga' => $row->titulo_otorga,
        ]);
    }
}