import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})

export class VehicleDetailsComponent implements OnInit {

  vehicleId: number=0;
  vehicle: Vehicle | undefined;
  //vehicle: Vehicle = new Vehicle();
  //vehicles: Vehicle[] | undefined;
  vehicles: Array<Vehicle> = [];

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.params['vehicleId'];

    this.vehicle = new Vehicle();
    this.vehicleService.getVehicleById(this.vehicleId).subscribe( data => {
      this.vehicle = data;
    });
  }

  private getVehicles(){
    this.vehicleService.getVehiclesList().subscribe(data => {
      this.vehicles = data;
    });
    this.router.navigate(['vehicles']);
  }
  vehicleDetails(vehicleId: number){
    this.router.navigate(['vehicle-details', vehicleId]);
  }

  updateVehicleById(vehicleId: number){
    this.router.navigate(['update-vehicle-id', vehicleId]);
  }

  deleteVehicleById(vehicleId: number){
    this.vehicleService.deleteVehicleById(vehicleId).subscribe( data => {
      console.log(data);
      this.getVehicles();
    })
  }
}
