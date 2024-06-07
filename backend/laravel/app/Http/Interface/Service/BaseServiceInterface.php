<?php

namespace App\Http\Interface\Service;

interface BaseServiceInterface
{
    public function fetchAll();

    public function fetch($id);

    public function update(array $condition, $data);

    public function store($data);

    public function destroy($id);

}