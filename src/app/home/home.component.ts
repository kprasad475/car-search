import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  years: number[] = [2018, 2017, 2016, 2015,2014];
  makers:string[]=["toyota","ford","tata","maruti","volkswagon","mercedez-benz"]
  varient:string[]=["base-varient","semi-varient","full-option"]
  body:string[]=["sedan","hatch-back","suv","muv"];
  price:string[]=["5-7.5","7.5-10","10-15","15-20"];
  filteredCar: string[]=[];
  cars: Car[] = [
    {
      year: 2018, maker: "toyota", variant: "base-variant", body: "sedan", price: "10-15", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2017, maker: "ford", variant: "semi-variant", body: "suv", price: "15-20", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2016, maker: "tata", variant: "full-option", body: "hatch-back", price: "5-7.5", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2015, maker: "maruti", variant: "base-variant", body: "sedan", price: "7.5-10", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2014, maker: "volkswagon", variant: "semi-variant", body: "muv", price: "10-15", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2018, maker: "mercedez-benz", variant: "full-option", body: "suv", price: "15-20", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2017, maker: "toyota", variant: "base-variant", body: "hatch-back", price: "5-7.5", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2016, maker: "ford", variant: "semi-variant", body: "sedan", price: "7.5-10", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2015, maker: "tata", variant: "full-option", body: "muv", price: "10-15", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    },
    {
      year: 2014, maker: "maruti", variant: "base-variant", body: "suv", price: "15-20", name: "", mileage: "", horsepower: "", transmission: "", description: "", image: "",
      model: 0,
      makers: '',
      varient: ''
    }
  ];
  constructor(private router:Router,private service:CarService){

  }
       navigateToCars(){
        this.router.navigate(['/cars'])
       }

       search(term: string) {
        const filteredCars = this.cars.filter(car => car.maker.toLowerCase().includes(term.toLowerCase()));
        this.service.setFilteredCars(filteredCars);
        this.navigateToCars();
      }
    }
