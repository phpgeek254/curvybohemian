<?php

namespace App\Http\Controllers;

use App\Slider;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
   
    public function index()
    {
        $sliders = Slider::latest()->get();
        return response($sliders, 200);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $slider = Slider::create($request->all());
        return response(Slider::find($slider->id), 200);
    }

    public function show(Slider $slider)
    {
        //
    }

    public function edit(Slider $slider)
    {
        //
    }

    public function update(Request $request, Slider $slider)
    {
        //
    }

    
    public function destroy(Slider $slider)
    {
        foreach ($slider->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        $slider->delete();
        return response($slider, 200);
    }
}
