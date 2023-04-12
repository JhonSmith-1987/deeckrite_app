import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DtoGetProject} from "../Dto/DtoGetProject";
import {DtoPostProject} from "../Dto/DtoPostProject";
import {DtoSearchProject} from "../Dto/DtoSearchProject";
import {DtoGetUser} from "../Dto/DtoGetUser";
import {DtoPostUser} from "../Dto/DtoPostUser";
import {DtoLogin} from "../Dto/DtoLogin";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url:string = "/api/";

  headers = new HttpHeaders({
    "Content-Type": "application/json",
  })

  constructor(
    private http:HttpClient
  ) { }

  // ******************************************** projects routes

  getProjects():Observable<DtoGetProject[]> {
    return this.http.get(this.url + "getProjects", {headers:this.headers}) as Observable<DtoGetProject[]>;
  }

  async getProjectForId(id:number) {
    try {
      let data = await this.http.get(this.url + "getProjectForId/" + id, {headers:this.headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  getProjectSearchForName(name:string):Observable<DtoGetProject[]> {
    return this.http.get(this.url + "getProjectForName/" + name, {headers:this.headers}) as Observable<DtoGetProject[]>;
  }

  async postProject(project:DtoPostProject) {
    try {
      let data = await this.http.post(this.url + "postProject", project, {headers:this.headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async editProject(id:number, project:DtoPostProject) {
    try {
      let data = await this.http.put(this.url + "PutProject/" + id, project , {headers:this.headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteProject(id:number) {
    try {
      let data = await this.http.delete(this.url + "deleteProject/" + id, {headers:this.headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  // *********************************************** users routes

  getUsers():Observable<DtoGetUser[]> {
    return this.http.get(this.url + "getUsers", {headers:this.headers}) as Observable<DtoGetUser[]>;
  }

  async getUserForId(id:number) {
    try {
      let data = await this.http.get(this.url + "getUsersForId/" + id, {headers:this.headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async postUser(user:DtoPostUser) {
    try {
      let data = await this.http.post(this.url + "postUser", user, {headers:this.headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async postLogin(login:DtoLogin) {
    try {
      let data = await this.http.post(this.url + "postLogin", login, {headers:this.headers}).toPromise();
      return data;
    }catch (e) {
      return e;
    }
  }

  async editUser(id:number, user:DtoPostUser) {
    try {
      let data = await this.http.put(this.url + "PutUser/" + id, user , {headers:this.headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async editUserPassword(id:number, user:DtoPostUser) {
    try {
      let data = await this.http.put(this.url + "PutUserPassword/" + id, user , {headers:this.headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

  async deleteUser(id:number) {
    try {
      let data = await this.http.delete(this.url + "deleteUser/" + id, {headers:this.headers}).toPromise();
      return data;
    } catch (e) {
      return e;
    }
  }

}
