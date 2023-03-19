import { Component, OnInit, Input } from '@angular/core';
import { Routes } from '@angular/router';
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

  //spread -> stage 4, liver brain lung, biopsy-> at least stage 3
  
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

  constructor () {}
  ngOnInit(): void {
    if (this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages():void{
    setInterval(() =>{
      this.goNext();
    }, 2000);
  }
  
}
