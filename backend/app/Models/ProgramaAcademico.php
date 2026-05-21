<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaAcademico extends Model
{
    protected $table = 'form_programas';

    protected $primaryKey = 'id';

    const CREATED_AT = 'creado';
    const UPDATED_AT = 'actualizado';

    protected $fillable = [
        'nombre',
        'fac_id',
        'cod',
        'estado'
    ];

    public function facultad()
    {
        return $this->belongsTo(Facultad::class, 'fac_id', 'id');
    }

    public function grados()
    {
        return $this->hasMany(\App\Models\ProgramaGrado::class, 'programa_id', 'id');
    }
}