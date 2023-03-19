import { Component, Input} from '@angular/core';
interface imageData{
  src: string;
  alt: string;
}
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  @Input() hotdish:imageData[] = [
    {src: "assets/pics/pidan.jpg", alt: "kungpaochicken"}, 
    {src: "assets/pics/pidan.jpg", alt: "maoxuewang"},
    {src: "assets/pics/pidan.jpg", alt: "mapotofu"},
    {src: "assets/pics/pidan.jpg", alt:"suancaiyu"}
  ];
}
