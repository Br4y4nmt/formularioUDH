<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProgramaAcademico;
use Illuminate\Http\Request;

class ProgramaAcademicoController extends Controller
{
    public function index(Request $request)
    {
        $facultadId = $request->query('facultad_id');
        $cod = $request->query('cod');

        $query = ProgramaAcademico::query()
            ->where('estado', 1);

        if ($facultadId !== null && $facultadId !== '') {
            $query->where('fac_id', $facultadId);
        }

        if ($cod !== null && $cod !== '') {
            $query->where('cod', $cod);
        }

        $programas = $query
            ->select([
                'id',
                'nombre',
                'fac_id',
                'cod'
            ])
            ->orderBy('nombre')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $programas
        ]);
    }
}