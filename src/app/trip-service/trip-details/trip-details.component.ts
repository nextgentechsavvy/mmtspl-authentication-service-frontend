import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})

export class TripDetailsComponent implements OnInit {

  tripId: number=0;
  trip: Trip | undefined;
  //trip: Trip = new Trip();
  //trips: Trip[] | undefined;
  trips: Array<Trip> = [];

  constructor(private route: ActivatedRoute, private router: Router, private tripService: TripService) { }

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params['tripId'];

    this.trip = new Trip();
    this.tripService.getTripById(this.tripId).subscribe( data => {
      this.trip = data;
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
