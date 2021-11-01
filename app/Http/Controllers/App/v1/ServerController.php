<?php

namespace App\Http\Controllers\App\v1;

use App\Http\Controllers\Controller;
use App\Server;
use Illuminate\Http\Request;

use App\Http\Resources\v1\ServerResource;

class ServerController extends Controller
{
    /**
     * Display a listing of the resource.
     * Get the last 5 Server order by Updated
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(ServerResource::collection(Server::orderByDesc('updated_at')->limit(5)->get()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Server  $server
     * @return \Illuminate\Http\Response
     */
    public function show(Server $server)
    {
        //
        return response()->json(new ServerResource($server));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Server  $server
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Server $server)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Server  $server
     * @return \Illuminate\Http\Response
     */
    public function destroy(Server $server)
    {
        //
    }
}
