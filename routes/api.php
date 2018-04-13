<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::resource('beauty', 'BeautyController');
Route::resource('comment', 'CommentController');
Route::resource('diy', 'DiyController');
Route::resource('fact', 'FactController');
Route::resource('fashion', 'FashionController');
Route::resource('gallery', 'GalleryController');
Route::resource('like', 'LikeController');
Route::resource('post', 'PostController');
Route::resource('slider', 'SliderController');
Route::resource('image', 'ImageController');

Route::resource('auth', 'UserController');
