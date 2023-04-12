import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import {ApiServiceService} from "./api-service.service";


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor(
    private api:ApiServiceService
  ) { }

  alertError(message:string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      timer: 1500
    })
  }

  alertOk(message:string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  alertDelete(message:string, id:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteProject(id).then((res)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }).catch(e=>{
          console.log(e);
        })
      }
    })
  }

}
