<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\DocumentRequest;
use App\Http\Service\Document\DocumentService;
use Illuminate\Http\Request;

class DocumentsController extends Controller
{
    public function __construct(DocumentService $service)
    {
        $this->service = $service;
    }


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {

            $item = $this->service->featchs($request->only('category_id', 'page', 'limit'));
            
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(DocumentRequest $request)
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DocumentRequest $request)
    {
        try {

            $item = $this->service->store($request->all());
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(documents $documents)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(documents $documents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DocumentRequest $request,  $id)
    {
        try {

            $item = $this->service->update($id, $request->only("name", "category_id", "description"));
            return response()->json(['data' => $item,'message' => "", 'success' => true ], 200); 

        }catch( \Exception $e ){
            report( $e );
            return response()->json(['message' => $e->getMessage(), 'success' => false ], 401); 
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( $id)
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
