<?php

namespace App\Http\Controllers;

use App\Fashion;
use Illuminate\Http\Request;


class FashionController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
    
    public function index()
    {
        $fashion_list = Fashion::latest()->get();
        return response($fashion_list, 200);
    }

    
    public function create()
    {
        
    }

    
    public function store(Request $request)
    {
        $fashion = Fashion::create($request->all());
        return response(Fashion::find($fashion->id), 200);
    }

    
    public function show(Fashion $fashion)
    {
        //
    }

    
    public function edit(Fashion $fashion)
    {

    }

   
    public function update(Request $request, Fashion $fashion)
    {
        $fashion->update($request->all());
        return response($fashion, 200);
    }

    
    public function destroy(Fashion $fashion)
    {
        foreach ($fashion->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        $fashion->delete();
        return response($fashion, 200);
    }
}
