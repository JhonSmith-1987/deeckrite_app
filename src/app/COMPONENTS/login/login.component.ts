import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DtoLogin} from "../../Dto/DtoLogin";
import {ApiServiceService} from "../../SERVICES/api-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiServiceService
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  handleLogin() {
    let login:DtoLogin = {
      "email": this.formLogin.value.email,
      "password": this.formLogin.value.password
    }
    console.log(login);
    this.api.postLogin(login).then((res)=>{
      console.log(res);
    }).catch(e=>{
      console.log(e);
    })
  }
}
