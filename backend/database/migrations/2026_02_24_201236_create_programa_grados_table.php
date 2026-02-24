<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('programa_grados', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('programa_id');

            // nivel del usuario (lo mismo que tú manejas en selectedDegree)
            $table->enum('nivel', ['bachiller', 'titulo', 'segunda', 'maestro', 'doctor']);

            // algunos niveles usan título, otros grado, puedes guardar ambos
            $table->string('grado_otorga')->nullable();
            $table->string('titulo_otorga')->nullable();

            $table->timestamps();

            $table->foreign('programa_id')
                ->references('id')
                ->on('programas_academicos')
                ->onDelete('cascade');

            $table->unique(['programa_id', 'nivel']); // un programa no debe repetirse por nivel
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('programa_grados');
    }
};