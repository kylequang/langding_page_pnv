<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table='blog_content';
    protected $fillable=[
        'id_blogs','tittle','contents_main','image_main'
    ];
}