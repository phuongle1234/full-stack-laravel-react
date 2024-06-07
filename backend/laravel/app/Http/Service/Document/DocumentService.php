<?php

namespace App\Http\Service\Document;


use App\Models\Category;
use App\Http\Service\BaseService;
use App\Http\Repository\Document\DocumentRepository;
use App\Http\Interface\Service\DocumentServiceInterface;

class DocumentService extends BaseService implements DocumentServiceInterface
{
    protected $repository;
    public function __construct(DocumentRepository $repository)
    {
          parent::__construct($repository);
          $this->repository = $repository;
    }

    public function featchs($request)
    {
        return $this->repository->featchs($request);
    }

}
