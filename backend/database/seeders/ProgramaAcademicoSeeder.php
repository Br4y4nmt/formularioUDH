<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Facultad;
use App\Models\ProgramaAcademico;

class ProgramaAcademicoSeeder extends Seeder
{
    public function run(): void
    {
        $programas = [

            ['nombre' => 'INGENIERÍA DE SISTEMAS E INFORMÁTICA', 'facultad' => 'INGENIERÍA'],
            ['nombre' => 'INGENIERÍA CIVIL', 'facultad' => 'INGENIERÍA'],
            ['nombre' => 'INGENIERÍA AMBIENTAL', 'facultad' => 'INGENIERÍA'],
            ['nombre' => 'ARQUITECTURA', 'facultad' => 'INGENIERÍA'],
            ['nombre' => 'OBSTETRICIA', 'facultad' => 'CIENCIAS DE LA SALUD'],
            ['nombre' => 'PSICOLOGÍA', 'facultad' => 'CIENCIAS DE LA SALUD'],
            ['nombre' => 'ENFERMERÍA', 'facultad' => 'CIENCIAS DE LA SALUD'],
            ['nombre' => 'ODONTOLOGÍA', 'facultad' => 'CIENCIAS DE LA SALUD'],
            ['nombre' => 'PSICOLOGÍA - SEMIPRESENCIAL', 'facultad' => 'CIENCIAS DE LA SALUD'],
            ['nombre' => 'EDUCACIÓN BÁSICA: INICIAL Y PRIMARIA', 'facultad' => 'CIENCIAS DE LA EDUCACIÓN Y HUMANIDADES'],
            ['nombre' => 'DERECHO Y CIENCIAS POLÍTICAS', 'facultad' => 'DERECHO Y CIENCIAS POLÍTICAS'],
            ['nombre' => 'DERECHO Y CIENCIAS POLÍTICAS - SEMIPRESENCIAL', 'facultad' => 'DERECHO Y CIENCIAS POLÍTICAS'],
            ['nombre' => 'ADMINISTRACIÓN DE EMPRESAS', 'facultad' => 'CIENCIAS EMPRESARIALES'],
            ['nombre' => 'CONTABILIDAD Y FINANZAS', 'facultad' => 'CIENCIAS EMPRESARIALES'],
            ['nombre' => 'TURISMO, HOTELERÍA Y GASTRONOMÍA', 'facultad' => 'CIENCIAS EMPRESARIALES'],
            ['nombre' => 'MARKETING Y NEGOCIOS INTERNACIONALES', 'facultad' => 'CIENCIAS EMPRESARIALES'],
            ['nombre' => 'CONTABILIDAD Y FINANZAS - SEMIPRESENCIAL', 'facultad' => 'CIENCIAS EMPRESARIALES'],
            ['nombre' => 'ADMINISTRACIÓN DE EMPRESAS - SEMIPRESENCIAL', 'facultad' => 'CIENCIAS EMPRESARIALES'],

        ];

        foreach ($programas as $programa) {

            $facultad = Facultad::where('nombre', $programa['facultad'])->first();

            if ($facultad) {
                ProgramaAcademico::create([
                    'nombre' => $programa['nombre'],
                    'facultad_id' => $facultad->id
                ]);
            }
        }
    }
}