import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle'
import { VehicleService } from '../vehicle.service'
import { Router } from '@angular/router';
import { HostDetails } from '../host-details';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})

export class VehicleListComponent implements OnInit {

  //vehicles: Vehicle[] | undefined;
  vehicles: Array<Vehicle> = [];
  //vehicle: Vehicle = new Vehicle();
  hostDetails: HostDetails = new HostDetails();
  
  constructor(private vehicleService: VehicleService,
    private router: Router) { }

  ngOnInit(): void {
    this.vehicleService.getLocalHostAddress().subscribe(data => {
      this.hostDetails = data;
       console.log("this.hostDetails :: ", data);
       this.vehicleService.setLocalHostAddress(this.hostDetails);
    });
    
    this.getVehicles();
  }

  private getVehicles(){
    this.vehicleService.getVehiclesList().subscribe(data => {
      this.vehicles = data;
    });
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



  vehicleDetailsByType(vehicleType: String){
    this.router.navigate(['vehicle-details-type', vehicleType]);
  }

}