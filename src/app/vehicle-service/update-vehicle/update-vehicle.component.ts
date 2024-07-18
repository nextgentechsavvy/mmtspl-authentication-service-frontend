import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  vehicleId: number=0;
  vehicleType: String='';
  vehicle: Vehicle = new Vehicle();

  vehicleTypeVal: String = "";
  vehicleIdVal: number = 0;

  //vehicles: Vehicle[] | undefined;
   vehicles: Array<Vehicle> = [];

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.vehicleIdVal = this.route.snapshot.params['vehicleIdVal'];
      this.vehicleTypeVal = this.route.snapshot.params['vehicleTypeVal'];

      if(this.vehicleIdVal != null){
          this.vehicleService.getVehicleById(this.vehicleIdVal).subscribe(data => {
            this.vehicle = data;
            this.vehicles.push(this.vehicle);
          }, error => console.log(error)); 
        //this.vehicleIdVal = 0;

      }else{
        //this.vehicle = new Vehicle();
        this.vehicleService.getVehicleByType(this.vehicleTypeVal).subscribe( data => {
          this.vehicles = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateVehicleSearchById(this.vehicle.vehicleId);
     this.vehicleService.getVehicleById(this.vehicle.vehicleId).subscribe( data =>{
        //this.goToVehicleList();
        this.updateVehicleSearchById(this.vehicle.vehicleId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToVehicleList(){
    this.router.navigate(['/vehicles']);
  } */


 /*  updateVehicleSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateVehicleSearchById(vehicleIdVal: number){
    this.router.navigate(['update-vehicle-search-id', vehicleIdVal]);
    //this.updateVehicleSearchByIdRefresh();
  }


  updateVehicleSearchByType(vehicleTypeVal: String){
    //this.router.navigate(['vehicle-details-type', vehicleType]);
     this.router.navigate(['update-vehicle-search-type', vehicleTypeVal]);
  }

  updateVehicleById(vehicleIdVal: number){
    this.router.navigate(['update-vehicle-id', vehicleIdVal]);
  }

  
}
