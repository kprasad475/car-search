import { Component } from '@angular/core';
import { CarService } from '../car.service';
interface Car {
  model: number;
  mileage: string;
  horsepower: string;
  transmission: string;
  name: string;
  price: string;
  description: string;
  image: string;
  makers:string;
  varient:string;
  body:string
}
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  years: number[] = [2018, 2017, 2016, 2015,2014];
  makers:string[]=["toyota","ford","tata","maruti","volkswagon","mercedez-benz"]
  varient:string[]=["base-varient","semi-varient","full-option"]
  body:string[]=["sedan","hatch-back","suv","muv"];
  price:string[]=["5-7.5","7.5-10","10-15","15-20"];
  cars: Car[] = [] ;
  

  constructor(private service:CarService) {
    // Additional logic if needed
  }
  ngOnInit() {
    this.service.filteredCars$.subscribe(cars => {
      this.cars = cars;
      console.log('Filtered cars in CarsComponent:', this.cars); // Check if cars are correctly received
    });
  }
}
