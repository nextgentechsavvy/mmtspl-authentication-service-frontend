import { Component, OnInit } from '@angular/core';
import { LoginUserAuthMaster } from '../login-user-auth-master'
import { LoginService } from '../login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-loginuser',
  templateUrl: './create-loginuser.component.html',
  styleUrls: ['./create-loginuser.component.css']
})

export class CreateLoginuserComponent implements OnInit {

	loginUserAuthMasters: LoginUserAuthMaster = new LoginUserAuthMaster();
	  
	  constructor(private loginService: LoginService,
	              private router: Router) { }

	  ngOnInit(): void {
	  }

	  saveLoginUser(){
	    this.loginService.createLoginUser(this.loginUserAuthMasters).subscribe( data =>{
	        console.log(data);
	        this.goToLoginUserList();
	      },
	      error => console.log(error));
	  }

	  goToLoginUserList(){
	    this.router.navigate(['/login-user-list']);
	  }

	  onSubmit(){
	    console.log(this.loginUserAuthMasters);
	    this.saveLoginUser();
	  }
	}
