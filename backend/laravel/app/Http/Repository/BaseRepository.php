<?php

namespace App\Http\Repository;


use Illuminate\Database\Eloquent\Model;
use App\Http\Interface\Repository\BaseRepositoryInterface;
class BaseRepository implements BaseRepositoryInterface
//implements BaseRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;
    protected $per_page = 20;

    /**
     * BaseRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function fetchAll()
    {
        return $this->model->all();
    }

    public function fetchWhere(array $condition)
    {
        return $this->model->where($condition);
    }


    public function fetch($id)
    {
        // ->active()
        return $this->model->find($id);
    }

    public function update($id, $data)
    {
        return $this->model->findOrFail($id)->update($data);
    }

    public function store($data)
    {
        return  $this->model->create($data);
    }

    public function destroy($id)
    {
        return $this->model->find($id)->delete();
    }


}
