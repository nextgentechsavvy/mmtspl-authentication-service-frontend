import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle-id',
  templateUrl: './update-vehicle-id.component.html',
  styleUrls: ['./update-vehicle-id.component.css']
})

export class UpdateVehicleIdComponent implements OnInit {

  vehicleId: number=0;
  vehicle: Vehicle = new Vehicle();
  
  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.params['vehicleId'];

    this.vehicleService.getVehicleById(this.vehicleId).subscribe(data => {
      this.vehicle = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.vehicleService.updateVehicleById(this.vehicleId, this.vehicle).subscribe( data =>{
        this.goToVehicleList();
      }
      , error => console.log(error));
  }

  goToVehicleList(){
    this.router.navigate(['/vehicles']);
  }
}
