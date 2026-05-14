<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Facultad extends Model
{
    protected $table = 'facultades'; // 👈 MUY IMPORTANTE

    protected $primaryKey = 'fac_id';

    const CREATED_AT = 'fac_created';
    const UPDATED_AT = 'fac_updated';

    protected $fillable = [
        'fac_nombre',
        'mod_id',
        'fac_descripcion',
        'fac_estado'
    ];

    public function programas()
    {
        return $this->hasMany(ProgramaAcademico::class, 'fac_id', 'fac_id');
    }
}