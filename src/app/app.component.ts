import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    constructor(private router: Router){}

  name = 'Angular';
  isi : string;
  Input(val){
    this.isi = 
  }
  hasil(){
    this.router.navigate(['/hasil',this.isi]);
  }
}
