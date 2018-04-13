<?php

namespace App\Http\Controllers;

use App\Fact;
use Illuminate\Http\Request;


class FactController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
    
    public function index()
    {
        $facts = Fact::latest()->take(10)->get();
        return response($facts, 200);
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $fact = Fact::create($request->all());
        return response(Fact::find($fact->id), 200);
    }

    
    public function show(Fact $fact)
    {
        //
    }

    
    public function edit(Fact $fact)
    {
        //
    }

    public function update(Request $request, Fact $fact)
    {
        $fact->update($request->all());
        return response($fact, 200);
    }

   
    public function destroy(Fact $fact)
    {
        foreach ($fact->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        $fact->delete();
        return response($fact, 200);
    }
}
