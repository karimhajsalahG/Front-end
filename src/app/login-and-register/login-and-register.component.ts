import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent implements OnInit {



  email:string;
  password:string;
  remail:string;
  rpassword:string;
  rcpassword:string;
 
   constructor(private snackBar:MatSnackBar , private http : HttpClient , private router : Router){
 
   }
   ngOnInit(){
   }
   register() {
     if(this.rcpassword==this.rpassword){
       this.http.post("https://testappurls.herokuapp.com/register",{email : this.remail , Password : this.rpassword}).subscribe((res: any)=>{
         if(res.Result ){
           this.snackBar.open('Register  Successful','',{duration:1000})
         }
         else{
           this.snackBar.open('Register no Successful','',{duration:1000})
         }
       })
     }else{
       this.snackBar.open('Register no Successful','',{duration:1000})
     }
   }
   login() {
     this.http.post("https://testappurls.herokuapp.com/login",{email : this.email , Password : this.password}).subscribe((res: any)=>{
       if(res.Result){ 
         localStorage.setItem("connectedUser", res.connectedUser)
          this.router.navigate(["/urlData"])
        }else{
         this.snackBar.open('Login no Successful','',{duration:1000})
       }
     }) 
   }
}
