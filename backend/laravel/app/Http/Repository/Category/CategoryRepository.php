<?php

namespace App\Http\Repository\Category;


use App\Models\Category;
use App\Http\Repository\BaseRepository;
use App\Http\Interface\Repository\CategoryRepositoryInterface;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    protected $model;
    public function __construct(Category $model)
    {
          parent::__construct($model);
          $this->model = $model;
    }

    public function featchs($request)
    {
        
        $result = $this->model->with(['subCategory'])
                              ->orderBy("id", "DESC");

        if( empty($request['is_all']) )
        $result = $result->where( [ 'parent_id' =>  null ] );
           
        return ( empty($request['page'] ) ) ?  $result->get()
                                            :  $result->paginate($this->per_page);  
                            
    }

}
