<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facultad;
use Illuminate\Http\Request;

class FacultadController extends Controller
{
    public function index(Request $request)
    {
        $modId = $request->query('mod_id');

        $query = Facultad::query()
            ->where('fac_estado', 1);

        if ($modId !== null && $modId !== '') {
            $query->where('mod_id', $modId);
        }

        $facultades = $query
            ->select([
                'fac_id as id',
                'fac_nombre as nombre',
                'mod_id'
            ])
            ->orderBy('fac_nombre')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $facultades
        ]);
    }
}