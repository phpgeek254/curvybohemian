<?php

namespace App\Http\Controllers;

use App\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
   
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
         $like = Like::create([
            'likable_id' => $request->likable_id,
            'likable_type' => "App\\" .ucfirst($request->likable_type),
            'user_id' => $request->user_id
        ]);
        return response(Like::find($like->id), 200);
    }

    
    public function show(Like $like)
    {
        //
    }

    
    public function edit(Like $like)
    {
        //
    }

    public function update(Request $request, Like $like)
    {
        //
    }

    public function destroy(Like $like)
    {
       $like->delete();
       return response($like, 200);
    }
}
