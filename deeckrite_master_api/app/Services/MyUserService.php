<?php

namespace App\Services;

use App\Repositories\MyUserRepository;

class MyUserService
{

  public static function getUsers()
  {
    return MyUserRepository::getUsers();
  }

  public static function postUser(array $data)
  {
    MyUserRepository::postUser($data);
    return json_encode(['message' => 'Usuario creado con exito']);
  }

  public static function getUsersForId($id)
  {
    return MyUserRepository::getUsersForId($id);
  }

  public static function PutUser(array $data, $id)
  {
    MyUserRepository::PutUser($data, $id);
    return json_encode(['message' => 'Usuario y correo editados con exito']);
  }

  public static function PutUserPassword(array $data, $id)
  {
    MyUserRepository::PutUserPassword($data, $id);
    return json_encode(['message' => 'Contraseña editada con exito']);
  }

  public static function deleteUser($id)
  {
    MyUserRepository::deleteUser($id);
    return json_encode(['message' => 'Usuario Eliminado con exito']);
  }

}
