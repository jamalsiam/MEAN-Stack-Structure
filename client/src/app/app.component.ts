import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( private service:DataService){
    this.service.postData({s:"s"}).subscribe(res=>{
      console.log(res);
    })
  }
}
