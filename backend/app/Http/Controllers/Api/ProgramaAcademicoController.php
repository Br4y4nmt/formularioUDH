<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProgramaAcademico;
use Illuminate\Http\Request;

class ProgramaAcademicoController extends Controller
{
    public function index(Request $request)
    {
        $facultadId = $request->facultad_id;

        $query = ProgramaAcademico::query();

        if ($facultadId) {
            $query->where('facultad_id', $facultadId);
        }

        $programas = $query->orderBy('nombre')->get();

        return response()->json([
            'success' => true,
            'data' => $programas
        ]);
    }
}