import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'MMTSPL Authentication Service Frontend';
	  
	  constructor(private router: Router) { }

	  ngOnInit(): void {
	  }
	  
	  goToLohinUser(){
		//this.loginqueueserviceService.saveDetails(this.loginUserAuthMasters);
	    this.router.navigate(['/login-user']);
	  }
}
