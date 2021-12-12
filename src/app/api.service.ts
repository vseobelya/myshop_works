import { Injectable, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl!: string;
  baseUrl:string = "http://localhost";

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  //при нажатии на кнопку Войти
  public userlogin(username: any, password: any) {
    alert(username)
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
    .pipe(map(Users => {
      this.setToken(Users[0].name);
      this.getLoggedInName.emit(true);
      return Users;
    }));
  }

  // public userlogin(userData: any) {
  //   // alert(username)
  //   return this.httpClient.post<any>(this.baseUrl + '/login.php', userData)
  //   .subscribe(Users => {
  //     this.setToken(Users[0].name);
  //     this.getLoggedInName.emit(true);
  //     return Users;
  //   });

    // .pipe(map(Users => {
    //   this.setToken(Users[0].name);
    //   this.getLoggedInName.emit(true);
    //   return Users;
    // }));
  // }

  // при нажатии на кнопку Регистрация
  // public userregistration(name: any, email: any, pwd: any) {
  //   return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
  //   .pipe(map(Users => {
  //     return Users;
  //   }));
  // }

  public adduser(userData: any)
    {
      return this.httpClient.post(this.baseUrl + '/register.php', userData).subscribe();
      // .subscribe((res: any) => {
      //   this.getusers();
    // });
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  // проверка, залогинился ли пользователь
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
