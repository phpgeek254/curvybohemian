<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fashion extends Model
{
   protected $fillable = ['title', 'body', 'user_id'];
   protected $with = ['images', 'user', 'comments', 'likes'];

   public function images() {
   	return $this->morphMany(Image::class, 'imageble');
   }

   public function comments() {
   	return $this->morphMany(Comment::class, 'commentable');
   }

   public function likes() {
      return $this->morphMany(Like::class, 'likable');
   }
   
   public function user() {
      return $this->belongsTo(User::class);
    }
}
