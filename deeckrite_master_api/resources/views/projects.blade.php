@extends('layouts.layout')
@section('title', 'Mis proyectos')
@section('content')
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-md-12 col-sm-12">
        <div class="content_button">
          <button class="btn btn-primary w-0.5">Crear proyecto</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-md-12 col-sm-12">
        <div class="content_table">
          <table class="table table-striped table-hover">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
@endsection
