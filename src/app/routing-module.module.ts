import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { RouteGuardService } from "./route-guard.service";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    //canActivate: [RouteGuardService]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    // "difende" il path attraverso il metodo implementato canActivate, reindirizzando sulla pagina a scelta (vedi il canActivate)
    canActivate: [RouteGuardService]

  },
  {
    // i due punti è un placeholder e cattura tutto ciò che c'è tra / di sx e id
    path: 'users/:id/edit',
    component: UserDetailComponent,
    canActivate: [RouteGuardService]

  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [RouteGuardService]
})
export class RoutingModuleModule { }
