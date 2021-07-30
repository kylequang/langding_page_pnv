<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sharings extends Model
{
    use HasFactory;
    protected $table='sharing';
    protected $fillable=[
            'name',
            'image',
            'content',
            'description',
    ];
}