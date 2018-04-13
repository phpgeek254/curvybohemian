<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $domains = [
            'http://curvybohemian.com',
            'http://www.curvybohemian.com'
        ];
        // All all the requests to go through to my server.
        if(isset($request->server()['HTTP_ORIGIN'])) {
            $origin = $request->server()['HTTP_ORIGIN'];
            if(in_array($origin, $domains)) {
                header("Access-Control-Allow-Origin: " . $origin);
                header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-CSRF-TOKEN, X-Requested-With");
            }
        }

        return $next($request);
    }
}
