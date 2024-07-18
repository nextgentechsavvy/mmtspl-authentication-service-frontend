import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  
  constructor(private vehicleService: VehicleService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveVehicle(){
    this.vehicleService.createVehicle(this.vehicle).subscribe( data =>{
        console.log(data);
        this.goToVehicleList();
      },
      error => console.log(error));
  }

  goToVehicleList(){
    this.router.navigate(['/vehicles']);
  }

  onSubmit(){
    console.log(this.vehicle);
    this.saveVehicle();
  }
}
