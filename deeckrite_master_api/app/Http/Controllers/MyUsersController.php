<?php

namespace App\Http\Controllers;

use App\Services\MyUserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MyUsersController extends Controller
{
    public function getUsers()
    {
      return MyUserService::getUsers();
    }

    public function getUsersForId($id)
    {
      return MyUserService::getUsersForId($id);
    }

  public function postLogin(Request $request)
  {
    $data = $request->all();
    Log::info($data);
//    return MyUserService::postLogin($data);
  }

    public function postUser(Request $request)
    {
      $data = $request->all();
      return MyUserService::postUser($data);
    }

    public function PutUser(Request $request, $id)
    {
      $data = $request->all();
      return MyUserService::PutUser($data, $id);
    }

  public function PutUserPassword(Request $request, $id)
  {
    $data = $request->all();
    return MyUserService::PutUserPassword($data, $id);
  }

    public function deleteUser($id)
    {
      return MyUserService::deleteUser($id);
    }
}
