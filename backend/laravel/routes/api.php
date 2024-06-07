<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DocumentsController;

Route::group([], function () {
    Route::post('/create-category', [ CategoryController::class, 'store' ]  );
    Route::get('/read-category', [ CategoryController::class, 'index' ]  );
    Route::put('/update-category/{id}', [ CategoryController::class, 'update' ]  );
    Route::delete('/delete-category/{id}', [ CategoryController::class, 'destroy' ]  );

    
    Route::post('/create-document', [ DocumentsController::class, 'store' ]  );
    Route::get('/read-document', [ DocumentsController::class, 'index' ]  );
    Route::put('/update-document/{id}', [ DocumentsController::class, 'update' ]  );
    Route::delete('/delete-document/{id}', [ DocumentsController::class, 'destroy' ]  );

});

