<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
	protected $fillable = ['likable_id', 'user_id', 'likable_type'];
	protected $with = ['user'];
	
    public function likable() {
    	return $this->morphTo();
    }
    
    public function user() {
    	return $this->belongsTo(User::class);
    }
}
