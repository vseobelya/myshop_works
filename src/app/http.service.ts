import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  goodData:any;

  constructor(private http:HttpClient) { }

  //get all goods details
    public getgoods()
        {

            return this.http.get('http://localhost/goods.php');
        }
}
