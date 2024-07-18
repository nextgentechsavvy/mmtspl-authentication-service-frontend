import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
import { LoginUserAuthMaster } from '../login-user-auth-master'
import { LoginqueueserviceService } from '../loginqueueservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-user-update-id',
  templateUrl: './login-user-update-id.component.html',
  styleUrls: ['./login-user-update-id.component.css']
})
export class LoginUserUpdateIdComponent  implements OnInit {

	  loginId: number=0;
	  loginUserAuthMaster: LoginUserAuthMaster = new LoginUserAuthMaster();
	  
	  loginUserAuthMasters: Array<LoginUserAuthMaster> = [];
	  
	  constructor(private loginService: LoginService,
			  	  private loginqueueserviceService: LoginqueueserviceService,
	              private route: ActivatedRoute,
	              private router: Router) { }

	  ngOnInit(): void {
	    this.loginId = this.route.snapshot.params['loginId'];

	    this.loginService.getLoginUserById(this.loginId).subscribe(data => {
	      this.loginUserAuthMaster = data;
	    }, error => console.log(error));
	  }

	  onSubmit(){
	    this.loginService.updateLoginUserById(this.loginId, this.loginUserAuthMaster).subscribe( data =>{
	        this.goToLoginUserList();
	      }
	      , error => console.log(error));
	  }

	  
	  goToLohinUserDetails(loginId : number){
		    this.loginId = loginId;

		    this.loginService.getLoginUserById(this.loginId).subscribe(data => {
		      this.loginUserAuthMasters[0] = data;
		    }, error => console.log(error));
		    
		    this.loginqueueserviceService.saveDetails(this.loginUserAuthMasters);
		    this.router.navigate(['/registration-success']);
	  }
	  
	  goToLoginUserList(){
		    this.router.navigate(['/login-user-list']);
	  }

	  goToRegistrationSuccess(){
		//this.loginqueueserviceService.saveDetails(this.loginUserAuthMasters);
	    this.router.navigate(['/registration-success']);
	  }
	  
}