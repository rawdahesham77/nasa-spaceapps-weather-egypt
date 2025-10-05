import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formdata: FormGroup ;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.formdata = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.formdata.valid) {
      const { username, password } = this.formdata.value;
      this.authService.register(username, password).subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success('register is done');
        },
      });
    }
  }
}
