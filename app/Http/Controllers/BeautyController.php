<?php

namespace App\Http\Controllers;

use App\Beauty;
use Illuminate\Http\Request;

class BeautyController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
    public function index()
    {
        $beauty_list = Beauty::latest()->get();
        return response($beauty_list, 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
         $beauty = Beauty::create($request->all());
        return response(Beauty::find($beauty->id), 200);
    }

    
    public function show(Beauty $beauty)
    {
        //
    }

    public function edit(Beauty $beauty)
    {
        //
    }

   
    public function update(Request $request, Beauty $beauty)
    {
        $beauty->update($request->all());
        return response($beauty, 200);
    }

   
    public function destroy(Beauty $beauty)
    {
        $beauty->delete();
        foreach ($beauty->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        return response($beauty, 200, 200);
    }
}
