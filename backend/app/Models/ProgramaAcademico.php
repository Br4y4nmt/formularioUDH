<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaAcademico extends Model
{
    protected $table = 'programas_academicos'; // 🔥 NECESARIO (plural español)

    protected $fillable = [
        'nombre',
        'facultad_id'
    ];

    public function facultad()
    {
        return $this->belongsTo(Facultad::class);
    }
}