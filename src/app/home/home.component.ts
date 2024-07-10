import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  years: number[] = [2018, 2017, 2016, 2015,2014];
  makers:string[]=["toyota","ford","tata","maruti","volkswagon","mercedez-benz"]
  variant:string[]=["base-varient","semi-varient","full-option"]
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
  selectedBodyStyle: string = 'default';
  selectedMake:string= 'default';
  selectedVarient:string='default'
  receivedData: any[] = [
   
  ];
  ngOnInit() {
    this.receivedData = this.service.getCars();
    console.log('Initial data:', this.receivedData);
  }

  navigateToCars() {
    this.router.navigate(['/cars']);
  }

  search() {
    // console.log('Search initiated');
    // if (this.selectedBodyStyle !== 'default') {
    //   console.log('Received data before filter:', this.receivedData);
    //   const filteredCars = this.receivedData.filter(car =>
    //     car.makers.toLowerCase() === this.selectedBodyStyle.toLowerCase()
    //   );
    //   this.service.setFilteredCars(filteredCars);
    //   console.log('Filtered cars:', filteredCars);
    // } else {
    //   this.service.setFilteredCars(this.receivedData);
    // }
    const filteredCars = this.service.getCars()
    .filter(car =>
      (this.selectedBodyStyle === 'default' || (car.body && car.body.toLowerCase() === this.selectedBodyStyle.toLowerCase())) &&
      (this.selectedMake === 'default' || (car.makers && car.makers.toLowerCase() === this.selectedMake.toLowerCase())) &&
      (this.selectedVarient === 'default' || (car.variants && car.variants.toLowerCase() === this.selectedVarient.toLowerCase()))
    );
console.log(filteredCars)
  this.service.setFilteredCars(filteredCars);
  this.navigateToCars();

}

  }
    
