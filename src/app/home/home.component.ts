import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  years: number[] = [2018, 2017, 2016, 2015,2014];
  makers:string[]=["toyota","ford","tata","maruti","volkswagon","mercedez-benz"]
  varient:string[]=["base-varient","semi-varient","full-option"]
  body:string[]=["sedan","hatch-back"];
  price:string[]=["5-7.5","7.5-10","10-15"]

  constructor(){

  }

}
