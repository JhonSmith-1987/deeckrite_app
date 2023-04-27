<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class myProjects extends Model
{
    use HasFactory;

    protected function name():Attribute
    {
      return  new Attribute(
        get: fn($value) => ucwords($value),
        set: fn($value) => strtolower($value),
      );
    }
}
