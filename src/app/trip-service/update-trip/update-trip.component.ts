import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  tripId: number=0;
  tripType: String='';
  trip: Trip = new Trip();

  tripTypeVal: String = "";
  tripIdVal: number = 0;

  //trips: Trip[] | undefined;
   trips: Array<Trip> = [];

  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.tripIdVal = this.route.snapshot.params['tripIdVal'];
      this.tripTypeVal = this.route.snapshot.params['tripTypeVal'];

      if(this.tripIdVal != null){
          this.tripService.getTripById(this.tripIdVal).subscribe(data => {
            this.trip = data;
            this.trips.push(this.trip);
          }, error => console.log(error)); 
        //this.tripIdVal = 0;

      }else{
        //this.trip = new Trip();
        this.tripService.getTripByType(this.tripTypeVal).subscribe( data => {
          this.trips = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateTripSearchById(this.trip.tripId);
     this.tripService.getTripById(this.trip.tripId).subscribe( data =>{
        //this.goToTripList();
        this.updateTripSearchById(this.trip.tripId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToTripList(){
    this.router.navigate(['/trips']);
  } */


 /*  updateTripSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateTripSearchById(tripIdVal: number){
    this.router.navigate(['update-trip-search-id', tripIdVal]);
    //this.updateTripSearchByIdRefresh();
  }


  updateTripSearchByType(tripTypeVal: String){
    //this.router.navigate(['trip-details-type', tripType]);
     this.router.navigate(['update-trip-search-type', tripTypeVal]);
  }

  updateTripById(tripIdVal: number){
    this.router.navigate(['update-trip-id', tripIdVal]);
  }

  
}
