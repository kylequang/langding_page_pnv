<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItNuoiIt extends Model
{
    use HasFactory;
    protected $table='itnuoiits';
    protected $fillable = [
        'image','content', 'type'
    ];
}