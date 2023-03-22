import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  private currSlideIndex:number = 0;
  private images = []
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  linkToMenu(){
    this.router.navigate(['menu']);
  }
 



}
