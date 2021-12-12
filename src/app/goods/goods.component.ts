import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  data: any;

  constructor(private httpservice: HttpService) {
    //Get all goods details
    this.httpservice.getgoods().subscribe((res: any)=>{

      this.data = res;
    });
  }

  ngOnInit(): void {
  }

}
