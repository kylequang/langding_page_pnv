<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devmilestone extends Model
{
    use HasFactory;
    protected $table='devmilestone';
    protected $fillable=[
      'time','contents'
    ];
}