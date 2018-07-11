import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/Vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
