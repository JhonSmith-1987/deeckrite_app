<?php

use App\Http\Controllers\MyProjectsController;
use App\Http\Controllers\MyUsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// routes projects
Route::get('getProjects', [MyProjectsController::class, 'getProjects']);
Route::get('getProjectForId/{id}', [MyProjectsController::class, 'getProjectForId']);
Route::get('getProjectForName/{name}', [MyProjectsController::class, 'getProjectForName']);
Route::post('postProject', [MyProjectsController::class, 'postProject']);
Route::put('PutProject/{id}', [MyProjectsController::class, 'PutProject']);
Route::delete('deleteProject/{id}', [MyProjectsController::class, 'deleteProject']);

// routes user
Route::get('getUsers', [MyUsersController::class, 'getUsers']);
Route::get('getUsersForId/{id}', [MyUsersController::class, 'getUsersForId']);
Route::get('postLogin', [MyUsersController::class, 'postLogin']);
Route::post('postUser', [MyUsersController::class, 'postUser']);
Route::put('PutUser/{id}', [MyUsersController::class, 'PutUser']);
Route::put('PutUserPassword/{id}', [MyUsersController::class, 'PutUserPassword']);
Route::delete('deleteUser/{id}', [MyUsersController::class, 'deleteUser']);
