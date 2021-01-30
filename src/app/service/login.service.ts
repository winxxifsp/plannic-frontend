import { Injectable } from '@angular/core';
import { Usuario } from '../interface/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public LOGIN_SERVICE_URL = `${environment.API_URL}authenticate`;
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json'})
  }
  constructor(private http:HttpClient, ) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.LOGIN_SERVICE_URL, {
      username,
      password
    }, this.httpOptions);
  }


}
