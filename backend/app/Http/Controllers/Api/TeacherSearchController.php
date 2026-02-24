<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TeacherSearchController extends Controller
{
    public function buscar(Request $request)
{
    $request->validate([
        'dni' => 'required|digits:8'
    ]);

    try {

        $response = Http::withoutVerifying()
            ->timeout(15)
            ->post('https://vri.udh.edu.pe/api/search/teacher', [
                'query' => $request->dni
            ]);

        if (!$response->successful()) {
            return response()->json([
                'message' => 'Error API externa',
                'status_code' => $response->status(),
                'body' => $response->body()
            ], 500);
        }

        $data = $response->json();

        if (
            !isset($data['status']) ||
            $data['status'] !== 'success' ||
            empty($data['data'])
        ) {
            return response()->json([
                'message' => 'Docente no encontrado'
            ], 404);
        }

        $teacher = $data['data'][0];

        return response()->json([
            'dni' => $teacher['dni'],
            'nombre' => $teacher['docente'],
            'orcid' => $teacher['orcid'] ?? ''
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Error servidor',
            'error' => $e->getMessage()
        ], 500);
    }
}
    
}