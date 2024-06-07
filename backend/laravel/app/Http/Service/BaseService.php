<?php

namespace App\Http\Service;


use Illuminate\Database\Eloquent\Model;
use App\Http\Interface\Repository\BaseRepositoryInterface;

class BaseService implements BaseRepositoryInterface
//implements BaseRepositoryInterface
{
    /**
     * @var Model
     */
    protected $repository;

    /**
     * BaseRepository constructor.
     *
     * @param Model $model
     */
    public function __construct($repository)
    {
        $this->repository = $repository;
    }

    public function fetchAll()
    {
        return $this->repository->fetchAll();
    }

    public function fetchWhere(array $condition)
    {
        return $this->repository->fetchWhere($condition);
    }


    public function fetch($id)
    {
        // ->active()
        return $this->repository->fetch($id);
    }

    public function update($id, $data)
    {
        return $this->repository->update($id, $data);
    }

    public function store($data)
    {
        return  $this->repository->store($data);
    }

    public function destroy($id)
    {
        return $this->repository->destroy($id);
    }


}
