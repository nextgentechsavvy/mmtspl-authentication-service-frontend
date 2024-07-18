import { Component, OnInit } from '@angular/core';
import { LoginUserAuthMaster } from '../login-user-auth-master'
import { LoginService } from '../login.service'
import { Router } from '@angular/router';
//import { HostDetails } from '../host-details';


@Component({
  selector: 'app-login-user-list',
  templateUrl: './login-user-list.component.html',
  styleUrls: ['./login-user-list.component.css']
})

export class LoginUserListComponent implements OnInit {

	  //employees: Employee[] | undefined;
	  loginUserAuthMasters: Array<LoginUserAuthMaster> = [];
	  //employee: Employee = new Employee();
	  //hostDetails: HostDetails = new HostDetails();
	  
	  constructor(private loginService: LoginService,
	    private router: Router) { }

	  ngOnInit(): void {
	    /*
		this.loginService.getLocalHostAddress().subscribe(data => {
	      this.hostDetails = data;
	       console.log("this.hostDetails :: ", data);
	       this.loginService.setLocalHostAddress(this.hostDetails);
	    });
	    */
	    this.getAllLoginUserDetails();
	  }

	  private getAllLoginUserDetails(){
	    this.loginService.getAllLoginUserDetails().subscribe(data => {
	      this.loginUserAuthMasters = data;
	    });
	  }
	  
	  getLoginUserById(loginId: number){
	    this.router.navigate(['login-user-details', loginId]);
	  }

	  updateLoginUserById(loginId: number){
	    this.router.navigate(['login-user-update-id', loginId]);
	  }

	  deleteLoginUserById(loginId: number){
	    this.loginService.deleteLoginUserById(loginId).subscribe( data => {
	      console.log(data);
	      this.getAllLoginUserDetails();
	    })
	  }

	  getLoginUserByUserName(userName: String){
	    this.router.navigate(['login-user-details-name', userName]);
	  }
	}