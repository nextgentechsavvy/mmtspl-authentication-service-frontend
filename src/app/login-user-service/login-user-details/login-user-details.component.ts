import { Component, OnInit } from '@angular/core';
import { LoginUserAuthMaster } from '../login-user-auth-master'
import { LoginService } from '../login.service'
import { LoginqueueserviceService } from '../loginqueueservice.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { HostDetails } from '../host-details';

@Component({
  selector: 'app-login-user-details',
  templateUrl: './login-user-details.component.html',
  styleUrls: ['./login-user-details.component.css']
})

export class LoginUserDetailsComponent implements OnInit {

	  loginId: number=0;
	  loginUserAuthMaster: LoginUserAuthMaster = new LoginUserAuthMaster();
	  loginUserAuthMasters: Array<LoginUserAuthMaster> = [];

	  //hostDetails: HostDetails = new HostDetails();
	  
	  constructor(private loginService: LoginService,
			  	  private route: ActivatedRoute,
                  private router: Router) { }

	  ngOnInit(): void {
        this.loginId = this.route.snapshot.params['loginId'];
		/*
	    this.loginService.getLocalHostAddress().subscribe(data => {
	      this.hostDetails = data;
	       console.log("this.hostDetails :: ", data);
	       this.loginService.setLocalHostAddress(this.hostDetails);
	    });
	    */
	    this.getAllLoginUserDetailsByID(this.loginId);
	    
	  }

	  private getAllLoginUserDetailsByID(loginId: number){
	    this.loginService.getLoginUserById(loginId).subscribe(data => {
	      this.loginUserAuthMaster = data;
	    });
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

