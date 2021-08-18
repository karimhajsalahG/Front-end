import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { UrlDataComponent } from './url-data/url-data.component';

const routes: Routes = [ { path : "urlData" , component : UrlDataComponent , canActivate: [
  AuthGuardGuard
] } , { path : "Login" , component : LoginAndRegisterComponent} , {path:"**" , component : UrlDataComponent , canActivate: [
  AuthGuardGuard
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
