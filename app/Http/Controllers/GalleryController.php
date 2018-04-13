<?php

namespace App\Http\Controllers;

use App\Gallery;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
    
    public function index()
    {
        $galleries = Gallery::latest()->get();
        return response($galleries, 200);
    }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        $gallery = Gallery::create($request->all());
        return response(Gallery::find($gallery->id), 200);
    }

    
    public function show(Gallery $gallery)
    {
        //
    }

    
    public function edit(Gallery $gallery)
    {
       $gallery->delete();
    }

    
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    
    public function destroy(Gallery $gallery)
    {
        foreach ($gallery->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
       $gallery->delete();
       return response($gallery, 200);
    }
}
