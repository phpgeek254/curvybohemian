<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;


class PostController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api')->except(['index']);
    }
   
    public function index()
    {
        $post = Post::latest()->get();
        return response($post, 200);
    }

    public function create()
    {
        //
    }

   
    public function store(Request $request)
    {
        $post = Post::create($request->all());
        return response(Post::find($post->id), 200);
    }

   
    public function show(Post $post)
    {
        //
    }

    
    public function edit(Post $post)
    {
        //
    }

    
    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return response($post, 200);
    }

    public function destroy(Post $post)
    {
        foreach ($post->images as $image):
            $image_file = public_path($image->url);
            if (file_exists($image_file)) {
                unlink($image_file);
            }
        endforeach;
        $post->delete();
        return response($post, 200);
    }
}
