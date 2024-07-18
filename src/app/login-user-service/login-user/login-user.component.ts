import { Component, OnInit } from '@angular/core';
import { LoginUserAuthMaster } from '../login-user-auth-master';
import { LoginService } from '../login.service';
import { LoginqueueserviceService } from '../loginqueueservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

	loginUserAuthMaster: LoginUserAuthMaster = new LoginUserAuthMaster();
	
	loginUserAuthMasters: Array<LoginUserAuthMaster> = [];
	  
	  constructor(private loginService: LoginService,
			  	  private loginqueueserviceService: LoginqueueserviceService,
	              private router: Router) { }

	  ngOnInit(): void {
	  }

	  authenticateLoginUser(){
	    this.loginService.getLoginUserAuthentication(this.loginUserAuthMaster).subscribe( data =>{
	    	this.loginUserAuthMasters = data;
	        console.log(data);
	        this.goToRegistrationSuccess();
	      },
	      error => console.log(error));
	  }

	  goToRegistrationSuccess(){
		this.loginqueueserviceService.saveDetails(this.loginUserAuthMasters);
	    this.router.navigate(['/registration-success']);
	  }
	  
	  goToCreateLohinUser(){
		this.loginqueueserviceService.saveDetails(this.loginUserAuthMasters);
	    this.router.navigate(['/create-login-user']);
	  }

	  onSubmit(){
	    console.log(this.loginUserAuthMaster);
	    this.authenticateLoginUser();
	  }
	}

