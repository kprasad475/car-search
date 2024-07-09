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
  cars: Car[] = [
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'BMW 6-series gran coupe',
      price: '$89,395',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc1.png',
      makers:'toyota',
      varient:'base-varient',
      body:'hatch-back'
    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Chevrolet Camaro WMV20',
      price: '$66,575',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc2.png',
      makers:'ford',
      varient:'base-varient',
      body:'suv'



    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Lamborghini V520',
      price: '$125,250',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc3.png',
      makers:'tata',
      varient:'base-varient',
      body:'hatch-back'



    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Audi A3 Sedan',
      price: '$95,500',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc4.png',
      makers:'maruti',
      varient:'base-varient',
      body:'sedan'



    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Infiniti Z5',
      price: '$36,850',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc4.png',
      makers:'tata',
      varient:'base-varient',
      body:'sedan'

    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Porsche 718 Cayman',
      price: '$48,500',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc5.png',
      makers:'ford',
      varient:'base-varient',
      body:'hatch-back'
    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'BMW 8-series Coupe',
      price: '$56,000',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc7.png',
      makers:'volkswagon',
      varient:'base-varient',
      body:'sedan'
    },
    {
      model: 2017,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'BMW X-series-6',
      price: '$75,800',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc8.png',
      makers:'tata',
      varient:'base-varient',
      body:'hatch-back'



    }
  ];

  constructor(private service:CarService) {
    // Additional logic if needed
  }
  ngOnInit() {
    this.service.filteredCars$.subscribe(cars => {
      this.cars = cars;
    });
  }
}
