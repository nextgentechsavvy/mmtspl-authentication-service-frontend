import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip'
import { TripService } from '../trip.service'
import { Router } from '@angular/router';
import { HostDetails } from '../host-details';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})

export class TripListComponent implements OnInit {

  //trips: Trip[] | undefined;
  trips: Array<Trip> = [];
  //trip: Trip = new Trip();
  hostDetails: HostDetails = new HostDetails();
  
  constructor(private tripService: TripService,
    private router: Router) { }

  ngOnInit(): void {
    this.tripService.getLocalHostAddress().subscribe(data => {
      this.hostDetails = data;
       console.log("this.hostDetails :: ", data);
       this.tripService.setLocalHostAddress(this.hostDetails);
    });
    
    this.getTrips();
  }

  private getTrips(){
    this.tripService.getTripsList().subscribe(data => {
      this.trips = data;
    });
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



  tripDetailsByType(tripType: String){
    this.router.navigate(['trip-details-type', tripType]);
  }

}