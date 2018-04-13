<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
	protected $fillable = [
	    'user_id',
        'commentable_type',
        'commentable_id',
        'comment'

    ];

	protected $with = ['user', 'likes'];
	
    public function commentable () {
    	return $this->morphTo();
    }

    public function user() {
    	return $this->belongsTo(User::class);
    }

    public function likes() {
   	return $this->morphMany(Like::class, 'likable');
   }
}
