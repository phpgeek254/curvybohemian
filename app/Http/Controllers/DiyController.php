<?php

namespace App\Http\Controllers;

use App\Diy;
use Illuminate\Http\Request;

class DiyController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
    
    public function index()
    {
         $diy_list = Diy::latest()->get();
        return response($diy_list, 200);
    }

    public function create()
    {

    }

    public function store(Request $request)
    {
        $diy = Diy::create($request->all());
        return response(Diy::find($diy->id), 200);
    }

    public function show(Diy $diy)
    {
        //
    }

   
    public function edit(Diy $diy)
    {
        //
    }

    
    public function update(Request $request, Diy $diy)
    {
        $diy->update($request->all());
        return response($diy, 200);
    }

    public function destroy(Diy $diy)
    {
        foreach ($diy->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        $diy->delete();
        return response($diy, 200);
    }
}
