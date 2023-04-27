<?php

namespace App\Http\Controllers;

use App\Services\MyProjectsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MyProjectsController extends Controller
{
    public function getProjects()
    {
      return MyProjectsService::getProjects();
    }

    public function getProjectForId($id)
    {
      return MyProjectsService::getProjectForId($id);
    }

    public function getProjectForName($name){
      return MyProjectsService::getProjectForName($name);
    }

    public function postProject(Request $request)
    {
      $data = $request->all();
      return MyProjectsService::postProject($data);
    }

    public function PutProject(Request $request, $id)
    {
      $data = $request->all();
      return MyProjectsService::PutProject($data, $id);
    }

    public function deleteProject($id)
    {
      return MyProjectsService::deleteProject($id);
    }

}
