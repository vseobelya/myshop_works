import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  userData:any;

  constructor(private http:HttpClient) { }

  //get all goods details
    public getgoods()
        {

            return this.http.get('http://localhost/goods.php');
        }

  //add new user
    public adduser(userData: any)
      {
        return this.http.post('http://localhost/add_users.php/', userData).subscribe();
        // .subscribe((res: any) => {
        //   this.getusers();
      // });
    }
}
