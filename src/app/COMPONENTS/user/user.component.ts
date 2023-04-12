import { Component, OnInit } from '@angular/core';
import {DtoGetUser} from "../../Dto/DtoGetUser";
import {PageEvent} from "@angular/material/paginator";
import {ApiServiceService} from "../../SERVICES/api-service.service";
import Swal from "sweetalert2";
import {DtoResponseMessage} from "../../Dto/DtoResponseMessage";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string = '';
  pageSize: any = 4;
  page_from:number = 0;
  page_until:number = 4;

  users:DtoGetUser[] = [];

  constructor(
    private api:ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.api.getUsers().subscribe((res)=>{
      this.users = res;
    })
  }

  changePage(e: PageEvent) {
    this.page_from = e.pageIndex * e.pageSize;
    this.page_until = this.page_from + e.pageSize
  }

  searchUser() {
    console.log(this.name);
  }

  deleteuser(id: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Quieres eliminar este proyecto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteUser(id).then((res)=>{
          let message:DtoResponseMessage = res as DtoResponseMessage;
          this.getUsers();
          Swal.fire(
            'Deleted!',
            message.message,
            'success'
          )
        }).catch(e=>{
          console.log(e);
        })
      }
    })
  }

}
