<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramaAcademico extends Model
{
    protected $table = 'programas';

    protected $primaryKey = 'pap_id';

    const CREATED_AT = 'pap_created';
    const UPDATED_AT = 'pap_updated';

    protected $fillable = [
        'pap_nombre',
        'pap_codigo',
        'pap_descripcion',
        'pap_estado',
        'fac_id'
    ];

    public function facultad()
    {
        return $this->belongsTo(Facultad::class, 'fac_id', 'fac_id');
    }
    public function grados()
    {
        return $this->hasMany(\App\Models\ProgramaGrado::class, 'programa_id');
    }
}