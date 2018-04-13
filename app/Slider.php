<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $fillable = ['name'];
    protected $with = ['images', 'likes', 'comments'];

   public function images() {
   	return $this->morphMany(Image::class, 'imageble');
   }

   public function comments() {
   	return $this->morphMany(Comment::class, 'commentable');
   }

   public function likes() {
   	return $this->morphMany(Like::class, 'likable');
   }
}
