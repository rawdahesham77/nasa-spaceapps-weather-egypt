import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formdata: FormGroup ;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toaster:ToastrService,
    private router:Router
  ) {
    this.formdata = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){
    if(this.formdata.valid){
      const {username , password} = this.formdata.value;
      this.authService.login(username, password).subscribe({
        next:(res:any) =>{
          const token = res.token; 
          localStorage.setItem('usertoken' , token)
          console.log(token);
          
          this.toaster.success('logged in')
          this.router.navigate(['/home/welcomePage'])
        },error:(err) =>{
          console.log(err);
          this.toaster.error('error while login')
          
        }
      })
    }
  }
}
