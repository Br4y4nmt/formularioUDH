<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facultad;

class FacultadController extends Controller
{
    public function index()
    {
        $facultades = Facultad::orderBy('nombre')->get();

        return response()->json([
            'success' => true,
            'data' => $facultades
        ]);
    }
}