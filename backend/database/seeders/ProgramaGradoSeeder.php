<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProgramaAcademico;
use App\Models\ProgramaGrado;

class ProgramaGradoSeeder extends Seeder
{
    public function run(): void
    {
        // Limpiar tabla primero (opcional)
        ProgramaGrado::truncate();

        // Obtener todos los programas existentes
        $programas = ProgramaAcademico::all();

        foreach ($programas as $programa) {

            $nombre = strtoupper($programa->nombre);

            // =========================
            // BACHILLER
            // =========================
            ProgramaGrado::create([
                'programa_id' => $programa->id,
                'nivel' => 'bachiller',
                'grado_otorga' => "BACHILLER EN {$nombre}",
                'titulo_otorga' => null,
            ]);

            // =========================
            // TITULO PROFESIONAL
            // =========================
            ProgramaGrado::create([
                'programa_id' => $programa->id,
                'nivel' => 'titulo',
                'grado_otorga' => null,
                'titulo_otorga' => $this->getTituloProfesional($nombre),
            ]);

            // =========================
            // MAESTRO
            // =========================
            ProgramaGrado::create([
                'programa_id' => $programa->id,
                'nivel' => 'maestro',
                'grado_otorga' => "MAESTRO EN {$nombre}",
                'titulo_otorga' => null,
            ]);

            // =========================
            // DOCTOR
            // =========================
            ProgramaGrado::create([
                'programa_id' => $programa->id,
                'nivel' => 'doctor',
                'grado_otorga' => "DOCTOR EN {$nombre}",
                'titulo_otorga' => null,
            ]);
        }
    }

    /**
     * Ajusta títulos profesionales especiales
     */
    private function getTituloProfesional($nombre)
    {
        // Casos especiales
        if (str_contains($nombre, 'SISTEMAS')) {
            return 'INGENIERO DE SISTEMAS E INFORMÁTICA';
        }

        if (str_contains($nombre, 'CIVIL')) {
            return 'INGENIERO CIVIL';
        }

        if (str_contains($nombre, 'AMBIENTAL')) {
            return 'INGENIERO AMBIENTAL';
        }

        if (str_contains($nombre, 'PSICOLOG')) {
            return 'PSICÓLOGO';
        }

        if (str_contains($nombre, 'ENFERMER')) {
            return 'LICENCIADO EN ENFERMERÍA';
        }

        if (str_contains($nombre, 'ODONTO')) {
            return 'CIRUJANO DENTISTA';
        }

        if (str_contains($nombre, 'OBSTET')) {
            return 'OBSTETRA';
        }

        if (str_contains($nombre, 'DERECHO')) {
            return 'ABOGADO';
        }

        if (str_contains($nombre, 'ADMINISTRACIÓN')) {
            return 'LICENCIADO EN ADMINISTRACIÓN';
        }

        if (str_contains($nombre, 'CONTABILIDAD')) {
            return 'CONTADOR PÚBLICO';
        }

        if (str_contains($nombre, 'TURISMO')) {
            return 'LICENCIADO EN TURISMO, HOTELERÍA Y GASTRONOMÍA';
        }

        if (str_contains($nombre, 'MARKETING')) {
            return 'LICENCIADO EN MARKETING Y NEGOCIOS INTERNACIONALES';
        }

        // Por defecto
        return "LICENCIADO EN {$nombre}";
    }
}