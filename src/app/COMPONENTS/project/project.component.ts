import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiServiceService} from "../../SERVICES/api-service.service";
import {DtoGetProject} from "../../Dto/DtoGetProject";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoPostProject} from "../../Dto/DtoPostProject";
import {SweetAlertService} from "../../SERVICES/sweet-alert.service";
import {DtoResponseMessage} from "../../Dto/DtoResponseMessage";
import {PageEvent} from "@angular/material/paginator";
import Swal from "sweetalert2";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  pageSize: any = 4;
  page_from:number = 0;
  page_until:number = 4;

  projects:DtoGetProject[] = [];
  name: string = '';

  constructor(
    private api:ApiServiceService,
    private fb:FormBuilder,
    private alert:SweetAlertService
  ) {

  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.api.getProjects().subscribe((res)=>{
      this.projects = res;
    })
  }

  changePage(e: PageEvent) {
    this.page_from = e.pageIndex * e.pageSize;
    this.page_until = this.page_from + e.pageSize
  }

  deleteProject(id: number) {
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
        this.api.deleteProject(id).then((res)=>{
          let message:DtoResponseMessage = res as DtoResponseMessage;
          this.getProjects();
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

  searchProject() {
    if (this.name === '') {
      this.getProjects();
      return;
    }
    this.api.getProjectSearchForName(this.name).subscribe((res)=>{
      if (res.length === 0) {
        this.alert.alertError('No hubieron resultados en la búsqueda');
      }
      this.projects = res;
    })
  }
}
