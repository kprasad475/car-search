import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from './car-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private filteredCarsSubject = new BehaviorSubject<Car[]>([]);
  filteredCars$ = this.filteredCarsSubject.asObservable();

  setFilteredCars(cars: Car[]) {
    this.filteredCarsSubject.next(cars);
  }
  constructor() { }
}
