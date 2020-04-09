import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterModel } from 'src/register-model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  registerModel: RegisterModel;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router) {
    this.registerForm = this.formBuilder.group(
      {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    this.registerModel =
    {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registerModel.username = this.registerForm.get('username').value;
    this.registerModel.email = this.registerForm.get('email').value;
    this.registerModel.password = this.registerForm.get('password').value;
    this.registerModel.confirmPassword = this.registerForm.get('confirmPassword').value;

    this.authService.register(this.registerModel).subscribe(
      data => {console.log('Registration Success..');
      this.router.navigateByUrl("/register-success");
    },
      error => {console.log('Registration Failed');}
    );
  }
}
