<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Documents extends Model
{
    use HasFactory;

    protected $table = 'documents';
    protected $fillable = [ 'name', 'category_id', 'description' ];

    public function categories()
    {
       return $this->belongsTo(Category::class, "category_id", "id")->withTrashed();
    }
}
