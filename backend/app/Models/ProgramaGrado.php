<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaGrado extends Model
{
    protected $table = 'programa_grados';

    protected $fillable = [
        'programa_id',
        'nivel',
        'grado_otorga',
        'titulo_otorga',
    ];

    public function programa()
    {
        return $this->belongsTo(ProgramaAcademico::class, 'programa_id');
    }
}