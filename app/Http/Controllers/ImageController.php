<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    private $destination = 'uploaded_files/';

    public function index()
    {
        //
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $file_name = null;
        if ($file = $request->file('file'))
        {
            $file_name = uniqid().$file->getClientOriginalName();
            $file->move($this->destination, $file_name);
        }

        $image = Image::create([
            'imageble_id'=> (int)$request->imageble_id,
            'imageble_type'=> "App\\" . ucfirst($request->imageble_type),
            'url'=> $this->destination.$file_name,
        ]);
        return response(Image::find($image->id), 200);
    }


    public function show(Image $image)
    {
        //
    }


    public function edit(Image $image)
    {
        //
    }


    public function update(Request $request, Image $image)
    {
        //
    }


    public function destroy(Image $image)
    {
        $image->delete();
        $image_file = public_path($image->url);
        if (file_exists(public_path($image->url))) {
            unlink($image_file);
        }
        return response($image, 200);
    }
}
