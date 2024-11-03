<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class ShopItem extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'stock',
        'description',
    ];
}
