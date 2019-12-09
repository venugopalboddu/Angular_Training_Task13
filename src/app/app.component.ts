import { Component, OnInit, Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    p: Number = 1;
    count: Number = 5;
   
    data: any;
    constructor(private s: DetailsService) { }
   
    ngOnInit() {
        this.s.getEmployees().subscribe((res)=>{
            console.log("Details", res);
            this.data = res;
        });
    }
}

