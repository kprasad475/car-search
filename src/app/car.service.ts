import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Car {
  model: number;
  mileage: string;
  horsepower: string;
  transmission: string;
  name: string;
  price: string;
  description: string;
  image: string;
  makers: string;
  varient: string;
  body: string;
  year: number; // Add year property
  maker: string; // Add maker property
  variant: string; // Add variant property
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carData: any[] = [
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
      model: 2018,
      mileage: '3100 mi',
      horsepower: '240HP',
      transmission: 'automatic',
      name: 'Chevrolet Camaro WMV20',
      price: '$66,575',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.',
      image: 'assets/images/featured-cars/fc2.png',
      makers:'ford',
      varient:'semi-varient',
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
      varient:'semi-varient',
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
      varient:'semi-varient',
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
      body:'sedan'



    }
  ];

  private filteredCarsSource = new BehaviorSubject<Car[]>(this.carData);
  filteredCars$ = this.filteredCarsSource.asObservable();
  constructor() {}

  getCars() {
    return this.carData;
  }

  setFilteredCars(cars: Car[]) {
    console.log('Filtered cars:', cars); // Check if cars are correctly filtered
    this.filteredCarsSource.next(cars); // Emit the filtered cars through BehaviorSubject
  }

  // settFilteredCars(cars:Car[]){
  //   this.filteredCars$.next(cars)
  // }
}
