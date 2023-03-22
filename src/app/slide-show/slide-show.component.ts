import { Component, OnInit, Input } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { PredictionEvent } from '../prediction-event';

interface carouselImage{
  src: string;
  alt: string;
}
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit{

  public selectedIndex:number = 0;
  gesture:String = "";
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() images:carouselImage[] = [
    {src: "assets/pics/kungpaochicken.jpg", alt: "kungpaochicken"}, 
    {src: "assets/pics/maoxuewang.png", alt: "maoxuewang"},
    {src: "assets/pics/mapotofu.jpg", alt: "mapotofu"},
    {src: "assets/pics/picklefish.png", alt:"suancaiyu"}
  ];
  //data:string = this.images[0].src;
  //select a slide

  constructor(private router: Router){}
  //go to next slide
  goPrev():void {
    if (this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }
  }
  
  goNext():void {
      if (this.selectedIndex === this.images.length-1){
        this.selectedIndex = 0;
      }
      else{
        this.selectedIndex++;
      }
    }
  ngOnInit(): void {
    // if (this.autoSlide){
    //   this.autoSlideImages();
    // }
  }

  autoSlideImages():void{
    setInterval(() =>{
      this.goNext();
    }, 2000);
  }
  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    this.handleGesture(this.gesture);
    
  }

  handleGesture(gest:String ):void{
    //slide go next
    if (gest.includes("Hand Pointing")){
      this.goNext();
    }

    else if (gest.includes("Two Hand Pointing")){
      this.goPrev();
    }

    if (gest.includes("Hand Pinching")){
      this.router.navigate(['menu']);
    }
    if(gest.includes("Open Hand")){
      this.router.navigate(['checkout']);
      
    }
    if(gest.includes("Closed Hand")){
      this.router.navigate(['about']);
      
    }
    
  }

}
