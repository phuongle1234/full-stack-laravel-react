<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use App\Http\Service\Category\CategoryService;


class CategoryController extends Controller
{
    protected $service;

    public function __construct(CategoryService $service)
    {
        $this->service = $service;
    }

    const PER_PAGE = 20;
     /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {

            $item = $this->service->featchs($request->only('is_all', 'parent_id','page'));
            
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(CategoryRequest $request)
    {
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        try {
            
            $item = $this->service->store( $request->all() );

            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, $id)
    {
        try {

            $item = $this->service->update($id, $request->all() );
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {

            $item = $this->service->destroy($id);
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

}
