<?php

namespace App\Http\Repository\Document;


use App\Models\Documents;
use App\Http\Repository\BaseRepository;
use App\Models\Category;
use App\Http\Interface\Repository\DocumentRepositoryInterface;

class DocumentRepository extends BaseRepository implements DocumentRepositoryInterface
{
    private $_catelory_model;
    protected $model;
    public function __construct(Documents $model, Category $_catelory_model)
    {
          parent::__construct($model);
          $this->model = $model;
          $this->_catelory_model = $_catelory_model;
    }

    public function featchs($request)
    {
        
        $result = $this->_catelory_model->with(['documents']);

        if( !empty($request['category_id'] ) )
            $result = $result->where( [ 'id' =>  $request['category_id'] ] );

        $result = $result->orderBy("id", "DESC");
                   
        return ( empty($request['page'] ) ) ?  $result->get()
                                            :  $result->paginate($this->per_page);  
                            
    }

}
