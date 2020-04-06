import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from 'src/register-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'http://localhost:8082/api/auth/';

  constructor(private httpClient: HttpClient) {

  }

   register(registerModel: RegisterModel): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerModel);
  }
}
