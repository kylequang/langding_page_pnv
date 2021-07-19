<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as admins;
class Admin extends admins
{
    use HasFactory;
    protected $table='admin';
    protected $fillable=[
      'name',
      'email',
      'password',
      'role'
    ];
}