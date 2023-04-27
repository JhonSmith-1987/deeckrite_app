<?php

namespace App\Repositories;

use App\Models\myProjects;
use Illuminate\Support\Facades\DB;

class MyProjectsRepository
{

  public static function getProjects()
  {
    return myProjects::all();
  }

  public static function getProjectForId($id)
  {
    return myProjects::find($id);
  }

  public static function getProjectForName($nameSearch)
  {
    return DB::table('my_projects')->where('name', 'LIKE', $nameSearch)->get();
  }

  public static function postProject(array $data)
  {
    $project = new myProjects();
    $project->name = $data['name'];
    $project->save();
  }

  public static function PutProject(array $data, $id)
  {
    $name = $data['name'];
    myProjects::where('id', $id)->update([
      'name' => $name
    ]);
  }

  public static function deleteProject($id)
  {
    return myProjects::destroy($id);
  }

}
