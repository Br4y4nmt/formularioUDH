<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaGrado extends Model
{
    protected $table = 'form_prog_grados';

    protected $primaryKey = 'id';

    const CREATED_AT = 'creado';
    const UPDATED_AT = 'actualizado';

    protected $fillable = [
        'programa_id',
        'grado_otorga',
    ];

    public function programa()
    {
        return $this->belongsTo(ProgramaAcademico::class, 'programa_id', 'id');
    }
}