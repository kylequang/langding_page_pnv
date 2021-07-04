<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buildfoudation extends Model
{
    use HasFactory;
    protected $table='build_foundation';
    protected $fillable=[
        'id_PN','nameofBuild','descriptions'
    ];
}
