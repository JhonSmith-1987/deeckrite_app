import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./COMPONENTS/home/home.component";
import {ProjectComponent} from "./COMPONENTS/project/project.component";
import {UserComponent} from "./COMPONENTS/user/user.component";
import {CreateProjectComponent} from "./COMPONENTS/create-project/create-project.component";
import {CreateUserComponent} from "./COMPONENTS/create-user/create-user.component";
import {LoginComponent} from "./COMPONENTS/login/login.component";

const routes: Routes = [
  { path:"login", component: LoginComponent },
  { path:"home", component: HomeComponent, children: [
      { path:"project", component: ProjectComponent },
      { path:"user", component: UserComponent },
      { path:"create_project/:type/:id", component: CreateProjectComponent },
      { path:"create_user/:type/:id", component: CreateUserComponent },
      { path:"", redirectTo:"project", pathMatch: "full" },
      { path:"**", redirectTo:"project", pathMatch: "full" },
    ]},
  { path:"", redirectTo:"login", pathMatch: "full" },
  { path:"**", redirectTo:"login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
