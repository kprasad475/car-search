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
  variant:string[]=["base-varient","semi-varient","full-option"]
  price:string[]=["5-7.5","7.5-10","10-15","15-20"];
  filteredCar: string[]=[];
  body: string[] = ["sedan", "hatch-back", "suv", "muv"];
  makers: string[] = ["toyota", "ford", "tata", "maruti", "volkswagen", "mercedes-benz"];
  variants: string[] = ["base-varient", "semi-varient", "full-option"];
  

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
  selectedVariant:string='default'
  selectedPrice:string='default';
  selectedYear:string='default'
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
   
    const filteredCars = this.service.getCars()
    .filter(car =>
      (this.selectedBodyStyle === 'default' || (car.body && car.body.toLowerCase() === this.selectedBodyStyle.toLowerCase())) &&
      (this.selectedMake === 'default' || (car.makers && car.makers.toLowerCase() === this.selectedMake.toLowerCase())) &&
      (this.selectedVariant === 'default' || (car.varient && car.varient.toLowerCase() === this.selectedVariant.toLowerCase())) &&
      (this.selectedPrice === 'default' || this.isWithinPriceRange(car.price, this.selectedPrice)) && 
      (this.selectedYear === 'default' || (car.model && car.model.toString() === this.selectedYear))
    );
console.log(filteredCars)
  this.service.setFilteredCars(filteredCars);
  this.navigateToCars();

}


isWithinPriceRange(carPrice: number, priceRange: string): boolean {
  const [min, max] = priceRange.split('-').map(Number);
  return carPrice >= min && carPrice <= max;
}

  }
    
