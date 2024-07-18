import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-details-type',
  templateUrl: './trip-details-type.component.html',
  styleUrls: ['./trip-details-type.component.css']
})

export class TripDetailsTypeComponent implements OnInit {

  tripType: String='';
  trip: Trip = new Trip();
  //trips: Trip[] | undefined;
  trips: Array<Trip> = [];

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }


  ngOnInit(): void {
    this.tripType = this.route.snapshot.params['tripType'];

    //this.trip = new Trip();
    this.tripService.getTripByType(this.tripType).subscribe( data => {
      this.trips = data;
    });
  }

  private getTrips(){
    this.tripService.getTripsList().subscribe(data => {
      this.trips = data;
    });
    this.router.navigate(['trips']);
  }
  tripDetails(tripId: number){
    this.router.navigate(['trip-details', tripId]);
  }

  updateTripById(tripId: number){
    this.router.navigate(['update-trip-id', tripId]);
  }

  deleteTripById(tripId: number){
    this.tripService.deleteTripById(tripId).subscribe( data => {
      console.log(data);
      this.getTrips();
    })
  }
}
