import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DtoGetProject} from "../../Dto/DtoGetProject";
import {ApiServiceService} from "../../SERVICES/api-service.service";
import {DtoPostUser} from "../../Dto/DtoPostUser";
import {DtoResponseMessage} from "../../Dto/DtoResponseMessage";
import {SweetAlertService} from "../../SERVICES/sweet-alert.service";
import {DtoGetUser} from "../../Dto/DtoGetUser";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  type: string = '';
  id:number = 0

  hide: boolean = true;
  edit_password:boolean = false;
  edit_user:boolean = false;

  formCreateUser:FormGroup;

  projects:DtoGetProject[] = [];

  constructor(
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private api:ApiServiceService,
    private alert:SweetAlertService,
    private router:Router
  ) {
    this.formCreateUser = this.fb.group({
      name: [ '', Validators.required],
      email: [ '', [Validators.required, Validators.email]],
      password: [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      project_id: [ '',  Validators.required]
    });
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.id != 0){
      this.getUserForId();
    }
    this.getProjects();
  }

  getProjects() {
    this.api.getProjects().subscribe((res)=>{
      this.projects = res;
    })
  }

  createUser() {
    if (this.formCreateUser.status === "INVALID") {
      return;
    }
    let user:DtoPostUser = {
      "name": this.formCreateUser.value.name,
      "email": this.formCreateUser.value.email,
      "password": this.formCreateUser.value.password,
      "project_id": Number(this.formCreateUser.value.project_id)
    }
    this.api.postUser(user).then((res)=>{
      let response:DtoResponseMessage = res as DtoResponseMessage;
      this.alert.alertOk(response.message);
      this.router.navigate(['/home/user']);
    }).catch(e=>{
      console.log(e);
    })
  }

  getUserForId() {
    let id:number = this.route.snapshot.params['id'];
    if (id === 0) {
      return;
    }
    this.api.getUserForId(id).then((res)=>{
      let user_edit:DtoGetUser = res as DtoGetUser
      this.formCreateUser = this.fb.group({
        name: [ user_edit.name, Validators.required],
        email: [ user_edit.email, [Validators.required, Validators.email]],
        password: [ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        project_id: [ '', Validators.required]
      });
    }).catch((e)=>{
      console.log(e);
    })
  }

  editUser() {
    let id:number = this.route.snapshot.params['id'];
    let user:DtoPostUser = {
      'name': this.formCreateUser.value.name,
      'email': this.formCreateUser.value.email,
      'password': '',
      'project_id': 0
    }
    this.api.editUser(id, user).then((res)=>{
      let response:DtoResponseMessage = res as DtoResponseMessage;
      this.alert.alertOk(response.message);
      this.router.navigate(['/home/user']);
    }).catch(e=>{
      console.log(e);
    })
  }

  editUserPassword() {
    if (this.formCreateUser.value.password === '') {
      this.alert.alertError('Debes ingresar una contraseña');
      return;
    }
    let id:number = this.route.snapshot.params['id'];
    let user:DtoPostUser = {
      'name': '',
      'email': '',
      'password': this.formCreateUser.value.password,
      'project_id': 0
    }
    this.api.editUserPassword(id, user).then((res)=>{
      let response:DtoResponseMessage = res as DtoResponseMessage;
      this.alert.alertOk(response.message);
      this.router.navigate(['/home/user']);
    }).catch(e=>{
      console.log(e);
    })
  }

  showEditUser() {
    this.edit_user = true;
    this.edit_password = false;
  }

  showEditPassword() {
    this.edit_password = true;
    this.edit_user = false;
  }

}
