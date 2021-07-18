<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;
    protected $table='staff';
    protected $fillable = [
       'job','name','avatar', 'descriptions','admin_role'
    ];
}