import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})


export class DeleteTripComponent {

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
      //this.router.navigate(['delete-trip']);
  }

/*   onSubmit(){
    //this.deleteTripSearchById(this.trip.tripId);
     this.tripService.getTripById(this.trip.tripId).subscribe( data =>{
        //this.goToTripList();
        this.deleteTripSearchById(this.trip.tripId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToTripList(){
    this.router.navigate(['/trips']);
  } */


 /*  deleteTripSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteTripSearchById(tripIdVal: number){
    this.router.navigate(['delete-trip-search-id', tripIdVal]);
    //this.deleteTripSearchByIdRefresh();
  }


  deleteTripSearchByType(tripTypeVal: String){
    //this.router.navigate(['trip-details-type', tripType]);
     this.router.navigate(['delete-trip-search-type', tripTypeVal]);
  }

  /* deleteTripById(tripIdVal: number){
    this.router.navigate(['delete-trip-id', tripIdVal]);
  } */

  deleteTripById(tripId: number){
    this.tripService.deleteTripById(tripId).subscribe( data => {
      console.log(data);
      //this.getTrips();
      this.router.navigate(['delete-trip']);
    })
  }
  
}

