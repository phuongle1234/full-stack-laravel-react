<?php

namespace App\Http\Interface\Repository;

interface BaseRepositoryInterface
{
    public function fetchAll();

    public function fetch($id);

    public function update(array $condition, $data);

    public function store($data);

    public function destroy($id);

}