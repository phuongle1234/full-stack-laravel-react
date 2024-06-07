<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Documents;

class Category extends Model
{
    use HasFactory;

    use HasFactory, SoftDeletes;

    protected $table = 'categories';
    
    protected $fillable = [ 'name', 'parent_id', 'description' ];

    public function subCategory(){
        return $this->hasMany(category::class,'parent_id','id');
    }

    public function documents()
    {
       return $this->hasMany(Documents::class, 'category_id', 'id');
    }
}
