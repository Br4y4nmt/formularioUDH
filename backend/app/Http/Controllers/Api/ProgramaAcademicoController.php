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

        $query = ProgramaAcademico::query()
            ->where('pap_estado', 1);

        if ($facultadId) {
            $query->where('fac_id', $facultadId);
        }

        $programas = $query
            ->select([
                'pap_id as id',
                'pap_nombre as nombre',
                'fac_id'
            ])
            ->orderBy('pap_nombre')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $programas
        ]);
    }
}