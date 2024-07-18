import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
	  
  private localHostAddress: any;

  //MMTSPL Service call REST API
  //private user_service_baseUrl = "http://192.168.1.4:9004/restapiuserservices/";
  
  //MMTSPL Service call Zull API Gateway
  private user_service_baseUrl = "http://localhost:8765/mmtspl-user-service/restapiuserservices/";


  private user_service_baseUrlgetAllUserUrl = "getAllUser";
  private user_service_baseUrlgetUserByIdUrl = "getUserById/";
  private user_service_baseUrladdUserUrl = "addUser/";
  private user_service_baseUrlupdateUserUrl = "updateUser/";
  private user_service_baseUrlupdateUserByIdUrl = "updateUserById/";
  private user_service_baseUrldeleteUserUrl = "deleteUser/";
  private user_service_baseUrlgetUserByNameUrl = "getUserByName/";

  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.user_service_baseUrl + this.user_service_baseUrlgetAllUserUrl}`);
  }


  getUserById(userId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.user_service_baseUrl + this.user_service_baseUrlgetUserByIdUrl} ${userId}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.user_service_baseUrl + this.user_service_baseUrladdUserUrl}`, user);
  }

  
  updateUserById(userId: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.user_service_baseUrl + this.user_service_baseUrlupdateUserByIdUrl} ${userId}`, user);
  }

  deleteUserById(userId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.user_service_baseUrl + this.user_service_baseUrldeleteUserUrl} ${userId}`);
    return this.httpClient.get(`${this.user_service_baseUrl + this.user_service_baseUrldeleteUserUrl} ${userId}`);
  }



  getUserByName(userName: String): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.user_service_baseUrl + this.user_service_baseUrlgetUserByNameUrl} ${userName}`);
  }
  updateUser(userId: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.user_service_baseUrl + this.user_service_baseUrlupdateUserUrl} ${userId}`, user);
  }

  deleteUser(userId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.user_service_baseUrl + this.user_service_baseUrldeleteUserUrl} ${userId}`);
    return this.httpClient.get(`${this.user_service_baseUrl + this.user_service_baseUrldeleteUserUrl} ${userId}`);
  }
  
  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
	  
  setLocalHostAddress(hostDetails: HostDetails){
    this.user_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9004/restapiuserservices/";
  }
}