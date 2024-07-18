import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginUserAuthMaster } from './login-user-auth-master';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
  
  private localHostAddress: any;


  //MMTSPL Service call REST API
  //private login_user_auth_service_baseUrl = "http://192.168.1.4:9000/restapiemployeeservices/";
	  
  //MMTSPL Service call Zull API Gateway
  private login_user_auth_service_baseUrl = "http://localhost:8765/mmtspl-authentication-service/rest-api-login-authentication-service/";

  private login_user_auth_service_baseUrlgetAllLoginUserDetailsUrl = "getAllLoginUserDetails";
  private login_user_auth_service_baseUrlgetLoginUserByIdUrl = "getLoginUserById/";
  private login_user_auth_service_baseUrladdLoginUserUrl = "addLoginUser/";
  private login_user_auth_service_baseUrlupdateLoginUserUrl = "updateLoginUser/";
  private login_user_auth_service_baseUrlupdateLoginUserByIdUrl = "updateLoginUserById/";
  private login_user_auth_service_baseUrldeleteLoginUserUrl = "deleteLoginUser/";
  private login_user_auth_service_baseUrlgetLoginUserByUserNameUrl = "getLoginUserByUserName/";
  private login_user_auth_service_baseUrlgetLoginUserByUserUserNameUrl = "getLoginUserByUserUserName/";
  private login_user_auth_service_baseUrlgetLoginUserByUserEmailUrl = "getLoginUserByUserEmail/";
  
  private login_user_auth_service_baseUrlgetLoginUserAuthentication = "getLoginUserAuthentication/";

  
  getLoginUserAuthentication(loginUserAuthMasters: LoginUserAuthMaster): Observable<any>{
	    return this.httpClient.post(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserAuthentication}`, loginUserAuthMasters);
  }

  

  constructor(private httpClient: HttpClient) { }
  
  getAllLoginUserDetails(): Observable<LoginUserAuthMaster[]>{
    return this.httpClient.get<LoginUserAuthMaster[]>(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetAllLoginUserDetailsUrl}`);
  }


  getLoginUserById(loginId: number): Observable<LoginUserAuthMaster>{
    return this.httpClient.get<LoginUserAuthMaster>(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserByIdUrl} ${loginId}`);
  }

  createLoginUser(loginUserAuthMasters: LoginUserAuthMaster): Observable<Object>{
    return this.httpClient.post(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrladdLoginUserUrl}`, loginUserAuthMasters);
  }

  
  updateLoginUserById(loginId: number, loginUserAuthMaster: LoginUserAuthMaster): Observable<Object>{
    return this.httpClient.put(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlupdateLoginUserByIdUrl} ${loginId}`, loginUserAuthMaster);
  }

  deleteLoginUserById(loginId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrldeleteLoginUserUrl} ${loginId}`);
    return this.httpClient.get(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrldeleteLoginUserUrl} ${loginId}`);
  }



  getLoginUserByUserName(userName: String): Observable<LoginUserAuthMaster[]>{
    return this.httpClient.get<LoginUserAuthMaster[]>(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserByUserNameUrl} ${userName}`);
  }
  
  getLoginUserByUserUserName(userUsername: String): Observable<LoginUserAuthMaster[]>{
	    return this.httpClient.get<LoginUserAuthMaster[]>(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserByUserUserNameUrl} ${userUsername}`);
  }
  
  getLoginUserByUserEmail(userEmail: String): Observable<LoginUserAuthMaster[]>{
	    return this.httpClient.get<LoginUserAuthMaster[]>(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserByUserNameUrl} ${userEmail}`);
  }
  
  
  
  updateLoginUser(loginId: number, loginUserAuthMaster: LoginUserAuthMaster): Observable<Object>{
    return this.httpClient.put(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlupdateLoginUserUrl} ${loginId}`, loginUserAuthMaster);
  }

  deleteLoginUser(loginId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrldeleteEmployeeUrl} ${loginId}`);
    return this.httpClient.get(`${this.login_user_auth_service_baseUrl + this.login_user_auth_service_baseUrlgetLoginUserByUserEmailUrl} ${loginId}`);
  }

  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
  
  setLocalHostAddress(hostDetails: HostDetails){
    this.login_user_auth_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9012/rest-api-login-authentication-service/";
  }
}
