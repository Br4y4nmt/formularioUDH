<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaAcademico extends Model
{
    protected $table = 'programas_academicos'; 

    protected $fillable = [
        'nombre',
        'facultad_id'
    ];

    public function facultad()
    {
        return $this->belongsTo(Facultad::class);
    }
    public function grados()
    {
        return $this->hasMany(\App\Models\ProgramaGrado::class, 'programa_id');
    }
}