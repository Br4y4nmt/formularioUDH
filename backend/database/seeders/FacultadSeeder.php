<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Facultad;

class FacultadSeeder extends Seeder
{
    public function run(): void
    {
        $facultades = [
            'INGENIERÍA',
            'CIENCIAS DE LA EDUCACIÓN Y HUMANIDADES',
            'CIENCIAS DE LA SALUD',
            'DERECHO Y CIENCIAS POLÍTICAS',
            'CIENCIAS EMPRESARIALES',
        ];

        foreach ($facultades as $nombre) {
            Facultad::create([
                'nombre' => strtoupper($nombre)
            ]);
        }
    }
}