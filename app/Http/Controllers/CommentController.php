<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $comment = Comment::create([
            'commentable_id' => $request->commentable_id,
            'commentable_type' => "App\\".ucfirst($request->commentable_type),
            'user_id' => $request->user_id,
            'comment' => $request->comment
        ]);
        return response(Comment::find($comment->id), 200);
    }

    public function show(Comment $comment)
    {
        //
    }

    public function edit(Comment $comment)
    {
        //
    }

    public function update(Request $request, Comment $comment)
    {
        //
    }

    
    public function destroy(Comment $comment)
    {
        $comment->delete();
        return response($comment, 200);
    }
}
