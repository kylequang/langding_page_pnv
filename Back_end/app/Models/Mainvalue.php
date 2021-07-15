<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mainvalue extends Model
{
    use HasFactory;
    protected $table='main_value';
    protected $fillable = [
        'id_pn','name_value', 'description','icon'
    ];
}