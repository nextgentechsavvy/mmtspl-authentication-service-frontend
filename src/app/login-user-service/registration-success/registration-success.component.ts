import { Component, OnInit } from '@angular/core';
import { LoginUserAuthMaster } from '../login-user-auth-master'
import { LoginService } from '../login.service'
import { LoginqueueserviceService } from '../loginqueueservice.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { HostDetails } from '../host-details';

@Component({
  selector: 'app-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.css']
})

export class RegistrationSuccessComponent implements OnInit {

	  //employees: Employee[] | undefined;
	  loginUserAuthMasters: Array<LoginUserAuthMaster> = [];
	  //employee: Employee = new Employee();
	  //hostDetails: HostDetails = new HostDetails();
	  
	  constructor(private loginService: LoginService,
			  private loginqueueserviceService: LoginqueueserviceService,
			  private route: ActivatedRoute,
              private router: Router) { }

	  ngOnInit(): void {
		  
		  this.loginUserAuthMasters = this.loginqueueserviceService.retrieveDetails();
		  
		/*  
	    this.loginService.getLocalHostAddress().subscribe(data => {
	      this.hostDetails = data;
	       console.log("this.hostDetails :: ", data);
	       this.loginService.setLocalHostAddress(this.hostDetails);
	    });
	    
	    this.getAllLoginUserDetails();
	    */
	  }

	  private getAllLoginUserDetails(){
	    this.loginService.getAllLoginUserDetails().subscribe(data => {
	      this.loginUserAuthMasters = data;
	    });
	  }
			  
	  public getLoginUserById(loginId: number){
	    this.router.navigate(['login-user-details', loginId]);
	  }

	  public updateLoginUserById(loginId: number){
	    this.router.navigate(['login-user-update-id', loginId]);
	  }

	  public deleteLoginUserById(loginId: number){
	    this.loginService.deleteLoginUserById(loginId).subscribe( data => {
	      console.log(data);
	      this.getAllLoginUserDetails();
      })
		  }

	  getLoginUserByUserName(userName: String){
	    this.router.navigate(['login-user-details-name', userName]);
	  }
	}
