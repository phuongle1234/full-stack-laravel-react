<?php

namespace App\Http\Service\Category;


use App\Models\Category;
use App\Http\Service\BaseService;
use App\Http\Repository\Category\CategoryRepository;
USE App\Http\Interface\Service\CategoryServiceInterface;
class CategoryService extends BaseService implements CategoryServiceInterface
{
    protected $repository;
    public function __construct(CategoryRepository $repository)
    {
          parent::__construct($repository);
          $this->repository = $repository;
    }

    public function featchs($request)
    {
        return $this->repository->featchs($request);
    }

}
