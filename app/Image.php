<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['url', 'imageble_id', 'imageble_type', 'caption'];
    protected $with = ['comments', 'likes'];

    public function imageble(){
        return $this->morphTo();
    }

    public function comments() {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function likes(){
        return $this->morphMany(Like::class, 'likable');
    }
}
