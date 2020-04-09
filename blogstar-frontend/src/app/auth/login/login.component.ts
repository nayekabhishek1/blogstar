import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from 'src/login-model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: LoginModel;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
    )

    this.loginModel =
    {
      username: '',
      password: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginModel.username = this.loginForm.get('username').value;
    this.loginModel.password = this.loginForm.get('password').value;

    this.authService.login(this.loginModel).subscribe(data => {
      if (data) { console.log("Login Successful"); }
      else { console.log("Login Failed"); }
    });
  }

}
