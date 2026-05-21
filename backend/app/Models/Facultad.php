<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facultad extends Model
{
    protected $table = 'form_facultades';

    protected $primaryKey = 'id';

    const CREATED_AT = 'creado';
    const UPDATED_AT = 'actualizado';

    protected $fillable = [
        'nombre',
        'estado'
    ];

    public function programas()
    {
        return $this->hasMany(ProgramaAcademico::class, 'fac_id', 'id');
    }
}