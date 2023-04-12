import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiServiceService} from "../../SERVICES/api-service.service";
import {SweetAlertService} from "../../SERVICES/sweet-alert.service";
import {DtoPostProject} from "../../Dto/DtoPostProject";
import {DtoResponseMessage} from "../../Dto/DtoResponseMessage";
import {ActivatedRoute, Router} from "@angular/router";
import {DtoGetProject} from "../../Dto/DtoGetProject";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  type:string = '';
  id:number = 0;

  formCreateProject:FormGroup;

  constructor(
    private api:ApiServiceService,
    private fb:FormBuilder,
    private alert:SweetAlertService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.formCreateProject = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.id != 0) {
      this.getProjectForId();
    }
  }

  getProjectForId() {
    let id:number = this.route.snapshot.params['id'];
    this.api.getProjectForId(id).then((res)=>{
      let project_Edit:DtoGetProject = res as DtoGetProject;
      this.formCreateProject = this.fb.group({
        name: [ project_Edit.name , Validators.required ]
      });
    }).catch((e)=>{
      console.log(e);
    })
  }

  createProject() {
    let project:DtoPostProject = {
      "name": this.formCreateProject.value.name
    }
    this.api.postProject(project).then((res)=>{
      let response:DtoResponseMessage = res as DtoResponseMessage;
      this.alert.alertOk(response.message);
      this.router.navigate(['/home/project']);
    }).catch(e => {
      console.log(e);
    })
  }

  editProject() {
    let id:number = this.route.snapshot.params['id'];
    console.log(this.formCreateProject);
    let project:DtoPostProject = {
      "name": this.formCreateProject.value.name
    }
    this.api.editProject(id, project).then((res)=>{
      let response:DtoResponseMessage = res as DtoResponseMessage;
      this.alert.alertOk(response.message);
      this.router.navigate(['/home/project']);
    }).catch((e)=>{
      console.log(e);
    })
  }
}
