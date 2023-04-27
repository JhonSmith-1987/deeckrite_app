<?php

namespace App\Services;

use App\Repositories\MyProjectsRepository;
use Illuminate\Support\Facades\Log;

class MyProjectsService
{

  public static function getProjects()
  {
    return MyProjectsRepository::getProjects();
  }

  public static function getProjectForId($id)
  {
    return MyProjectsRepository::getProjectForId($id);
  }

  public static function getProjectForName($name)
  {
    $nameSearch = '%'.$name.'%';
    return MyProjectsRepository::getProjectForName($nameSearch);
  }

  public static function postProject(array $data)
  {
    MyProjectsRepository::postProject($data);
    return json_encode(['message'=>'Proyecto creado con exito']);
  }

  public static function PutProject(array $data, $id)
  {
    MyProjectsRepository::PutProject($data, $id);
    return json_encode(['message'=>'Proyecto actualizado con exito']);
  }

  public static function deleteProject($id)
  {
    MyProjectsRepository::deleteProject($id);
    return json_encode(['message'=>'Proyecto eliminado con exito']);
  }

}
