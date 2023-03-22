import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent implements OnInit{
  gesture: String = "";
  constructor(private router: Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    if (this.gesture.includes("Open Hand")){
      this.router.navigate(['home']);
    }
    
  }


}
