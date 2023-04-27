<?php

namespace App\Repositories;

use App\Models\myUsers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class MyUserRepository
{

  public static function getUsers()
  {
    return myUsers::all();
  }

  public static function postUser(array $data)
  {
    $user = new myUsers();
    $user->name = $data['name'];
    $user->email = $data['email'];
    $user->password = Hash::make($data['password']);
    $user->project_id = $data['project_id'];
    $user->save();
  }

  public static function getUsersForId($id)
  {
    return myUsers::find($id);
  }

  public static function PutUser(array $data, $id)
  {
    $name = $data['name'];
    $email = $data['email'];
    myUsers::where('id', $id)->update([
      'name' => $name,
      'email' => $email
    ]);
  }

  public static function PutUserPassword(array $data, $id)
  {
    $password = $data['password'];
    myUsers::where('id', $id)->update([
      'password' => Hash::make($password)
    ]);
  }

  public static function deleteUser($id)
  {
    return myUsers::destroy($id);
  }

}
