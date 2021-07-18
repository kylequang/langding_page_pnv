<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mainvalue extends Model
{
    use HasFactory;
    protected $table='mainvalue';
    protected $fillable = [
        'name_value', 'descriptions','icon'
    ];
}