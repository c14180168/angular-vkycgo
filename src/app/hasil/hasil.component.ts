import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    let cek = this.route.snapshot.paramMap.get('has');
    
  }

}