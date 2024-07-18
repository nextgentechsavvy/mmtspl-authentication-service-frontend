import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trip } from './trip';
import { HostDetails } from '../host-details';


@Injectable({
  providedIn: 'root'
})

export class TripService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
  
  private localHostAddress: any;

  //MMTSPL Service call REST API
  //private trip_service_baseUrl = "http://192.168.1.4:9010/restapitripservices/";
  
  //MMTSPL Service call Zull API Gateway
  private trip_service_baseUrl = "http://localhost:8765/mmtspl-trip-service/restapitripservices/";


  private trip_service_baseUrlgetAllTripUrl = "getAllTrip";
  private trip_service_baseUrlgetTripByIdUrl = "getTripById/";
  private trip_service_baseUrladdTripUrl = "addTrip/";
  private trip_service_baseUrlupdateTripUrl = "updateTrip/";
  private trip_service_baseUrlupdateTripByIdUrl = "updateTripById/";
  private trip_service_baseUrldeleteTripUrl = "deleteTrip/";
  private trip_service_baseUrlgetTripByTypeUrl = "getTripByType/";

  

  

  constructor(private httpClient: HttpClient) { }
  
  getTripsList(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(`${this.trip_service_baseUrl + this.trip_service_baseUrlgetAllTripUrl}`);
  }


  getTripById(tripId: number): Observable<Trip>{
    return this.httpClient.get<Trip>(`${this.trip_service_baseUrl + this.trip_service_baseUrlgetTripByIdUrl} ${tripId}`);
  }

  createTrip(trip: Trip): Observable<Object>{
    return this.httpClient.post(`${this.trip_service_baseUrl + this.trip_service_baseUrladdTripUrl}`, trip);
  }

  
  updateTripById(tripId: number, trip: Trip): Observable<Object>{
    return this.httpClient.put(`${this.trip_service_baseUrl + this.trip_service_baseUrlupdateTripByIdUrl} ${tripId}`, trip);
  }

  deleteTripById(tripId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.trip_service_baseUrl + this.trip_service_baseUrldeleteTripUrl} ${tripId}`);
    return this.httpClient.get(`${this.trip_service_baseUrl + this.trip_service_baseUrldeleteTripUrl} ${tripId}`);
  }



  getTripByType(tripType: String): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(`${this.trip_service_baseUrl + this.trip_service_baseUrlgetTripByTypeUrl} ${tripType}`);
  }
  updateTrip(tripId: number, trip: Trip): Observable<Object>{
    return this.httpClient.put(`${this.trip_service_baseUrl + this.trip_service_baseUrlupdateTripUrl} ${tripId}`, trip);
  }

  deleteTrip(tripId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.trip_service_baseUrl + this.trip_service_baseUrldeleteTripUrl} ${tripId}`);
    return this.httpClient.get(`${this.trip_service_baseUrl + this.trip_service_baseUrldeleteTripUrl} ${tripId}`);
  }

  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
  
  setLocalHostAddress(hostDetails: HostDetails){
    this.trip_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9010/restapitripservices/";
  }




}