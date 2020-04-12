import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from 'src/register-model';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/login-model';
import { JWTAuthResponse } from 'src/jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private url = 'http://localhost:8082/api/auth/';

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {

  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerModel);
  }

  login(loginModel: LoginModel): Observable<boolean> {
    return this.httpClient.post<JWTAuthResponse>(this.url + 'login', loginModel).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }


  public isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }
}
