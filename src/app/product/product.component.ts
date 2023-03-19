import { Component, Input, OnInit } from '@angular/core';
interface imageData{
  src: string;
  alt: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() title:string = "Chef's Special";

  @Input() images:imageData[] = [
    {src: "assets/pics/kungpaochicken.jpg", alt: "kungpaochicken"}, 
    {src: "assets/pics/maoxuewang.png", alt: "maoxuewang"},
    {src: "assets/pics/mapotofu.jpg", alt: "mapotofu"},
    {src: "assets/pics/picklefish.png", alt:"suancaiyu"}
  ];

  @Input() dishes:string[] = ["Kungpao Chicken", "Maoxuewang", "Mapo Tofu", "Pickle Fish"];
  public slide:any = this.images[0];
  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
