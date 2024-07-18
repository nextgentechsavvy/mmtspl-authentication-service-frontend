import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from '../trip';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trip-id',
  templateUrl: './update-trip-id.component.html',
  styleUrls: ['./update-trip-id.component.css']
})

export class UpdateTripIdComponent implements OnInit {

  tripId: number=0;
  trip: Trip = new Trip();
  
  constructor(private tripService: TripService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.tripId = this.route.snapshot.params['tripId'];

    this.tripService.getTripById(this.tripId).subscribe(data => {
      this.trip = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.tripService.updateTripById(this.tripId, this.trip).subscribe( data =>{
        this.goToTripList();
      }
      , error => console.log(error));
  }

  goToTripList(){
    this.router.navigate(['/trips']);
  }
}
