<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facultad;
use Illuminate\Http\Request;

class FacultadController extends Controller
{
    public function index(Request $request)
    {
        $facultades = Facultad::query()
            ->where('estado', 1)
            ->select([
                'id',
                'nombre'
            ])
            ->orderBy('nombre')
            ->get();

        return response()->json([
            'success' => true,
            'data' => $facultades
        ]);
    }
}