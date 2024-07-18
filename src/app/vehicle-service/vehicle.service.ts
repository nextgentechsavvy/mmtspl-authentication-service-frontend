import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';
import { HostDetails } from '../host-details';


@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
	  
  private localHostAddress: any;
	  
  //MMTSPL Service call REST API
  //private vehicle_service_baseUrl = "http://192.168.1.5:9009/restapivehicleservices/";
  
  //MMTSPL Service call Zull API Gateway
  private vehicle_service_baseUrl = "http://localhost:8765/mmtspl-vehicle-service/restapivehicleservices/";


  private vehicle_service_baseUrlgetAllVehicleUrl = "getAllVehicle";
  private vehicle_service_baseUrlgetVehicleByIdUrl = "getVehicleById/";
  private vehicle_service_baseUrladdVehicleUrl = "addVehicle/";
  private vehicle_service_baseUrlupdateVehicleUrl = "updateVehicle/";
  private vehicle_service_baseUrlupdateVehicleByIdUrl = "updateVehicleById/";
  private vehicle_service_baseUrldeleteVehicleUrl = "deleteVehicle/";
  private vehicle_service_baseUrlgetVehicleByTypeUrl = "getVehicleByType/";

  

  

  constructor(private httpClient: HttpClient) { }
  
  getVehiclesList(): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrlgetAllVehicleUrl}`);
  }


  getVehicleById(vehicleId: number): Observable<Vehicle>{
    return this.httpClient.get<Vehicle>(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrlgetVehicleByIdUrl} ${vehicleId}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Object>{
    return this.httpClient.post(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrladdVehicleUrl}`, vehicle);
  }

  
  updateVehicleById(vehicleId: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrlupdateVehicleByIdUrl} ${vehicleId}`, vehicle);
  }

  deleteVehicleById(vehicleId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrldeleteVehicleUrl} ${vehicleId}`);
    return this.httpClient.get(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrldeleteVehicleUrl} ${vehicleId}`);
  }


  getVehicleByType(vehicleType: String): Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrlgetVehicleByTypeUrl} ${vehicleType}`);
  }
  updateVehicle(vehicleId: number, vehicle: Vehicle): Observable<Object>{
    return this.httpClient.put(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrlupdateVehicleUrl} ${vehicleId}`, vehicle);
  }

  deleteVehicle(vehicleId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrldeleteVehicleUrl} ${vehicleId}`);
    return this.httpClient.get(`${this.vehicle_service_baseUrl + this.vehicle_service_baseUrldeleteVehicleUrl} ${vehicleId}`);
  }

  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
  
  setLocalHostAddress(hostDetails: HostDetails){
    this.vehicle_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9009/restapivehicleservices/";
  }




}