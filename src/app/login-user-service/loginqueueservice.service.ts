import { Injectable } from '@angular/core';
import { LoginUserAuthMaster } from './login-user-auth-master';


@Injectable({
  providedIn: 'root'
})

//@Injectable()

export class LoginqueueserviceService {
	
	loginUserAuthMasters: Array<LoginUserAuthMaster> = [];

  constructor() { }
  
  saveDetails(loginUserAuthMasters:any){
      this.loginUserAuthMasters = loginUserAuthMasters;
  }
  retrieveDetails(){
      return this.loginUserAuthMasters;
  }
}
