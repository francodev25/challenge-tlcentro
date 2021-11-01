<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/snmp/{server}', function ($server) {
    $session = new SNMP(SNMP::VERSION_2C, $server, "SNMP");                              // Procesos?                         //Sesiones?
    $results = $session->get(array("SNMPv2-MIB::sysName.0","SNMPv2-MIB::sysServices.0","HOST-RESOURCES-MIB::hrSystemProcesses.0","hrSystemNumUsers.0"));
    //$results = $session->get(array("sysDescr.0", "sysName.0","hrSystemProcesses.0","sysObjectID.0"));
    return response()->json(['results' => $results]);
});
