import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Address } from './address';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
	  
  private localHostAddress: any;
	  
  //MMTSPL Service call REST API
  //private address_service_baseUrl = "http://192.168.1.4:9002/restapiaddressservices/";
  
  //MMTSPL Service call Zull API Gateway
  //private address_service_baseUrl = "http://localhost:8765/mmtspl-address-service/restapiaddressservices/";
  private address_service_baseUrl = "http://192.168.223.13:30902/restapiaddressservices/";


  private address_rest_api_baseUrlgetAllAddressUrl = "getAllAddress";
  private address_rest_api_baseUrlgetAddressByIdUrl = "getAddressById/";
  private address_rest_api_baseUrladdAddressUrl = "addAddress/";
  private address_rest_api_baseUrlupdateAddressUrl = "updateAddress/";
  private address_rest_api_baseUrlupdateAddressById = "updateAddressById/";
  private address_rest_api_baseUrldeleteAddressUrl = "deleteAddress/";
  private address_rest_api_baseUrlgetAddressByCityUrl = "getAddressByCity/";

  constructor(private httpClient: HttpClient) { }
  
  getAddresssList(): Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.address_service_baseUrl + this.address_rest_api_baseUrlgetAllAddressUrl}`);
  }


  getAddressById(addressId: number): Observable<Address>{
    return this.httpClient.get<Address>(`${this.address_service_baseUrl + this.address_rest_api_baseUrlgetAddressByIdUrl} ${addressId}`);
  }

  createAddress(address: Address): Observable<Object>{
    return this.httpClient.post(`${this.address_service_baseUrl + this.address_rest_api_baseUrladdAddressUrl}`, address);
  }

  
  updateAddressById(addressId: number, address: Address): Observable<Object>{
    return this.httpClient.put(`${this.address_service_baseUrl + this.address_rest_api_baseUrlupdateAddressById} ${addressId}`, address);
  }

  deleteAddressById(addressId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.address_rest_api_baseUrl + this.address_rest_api_baseUrldeleteAddressUrl} ${addressId}`);
    return this.httpClient.get(`${this.address_service_baseUrl + this.address_rest_api_baseUrldeleteAddressUrl} ${addressId}`);
  }



  getAddressByCity(addressCity: String): Observable<Address[]>{
    return this.httpClient.get<Address[]>(`${this.address_service_baseUrl + this.address_rest_api_baseUrlgetAddressByCityUrl} ${addressCity}`);
  }
  
  
  updateAddress(addressId: number, address: Address): Observable<Object>{
    return this.httpClient.put(`${this.address_service_baseUrl + this.address_rest_api_baseUrlupdateAddressUrl} ${addressId}`, address);
  }



  deleteAddress(addressId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.address_rest_api_baseUrl + this.address_rest_api_baseUrldeleteAddressUrl} ${addressId}`);
    return this.httpClient.get(`${this.address_service_baseUrl + this.address_rest_api_baseUrldeleteAddressUrl} ${addressId}`);
  }
  
  getLocalHostAddress(): Observable<HostDetails>{
	    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
	  
  setLocalHostAddress(hostDetails: HostDetails){
    this.address_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9002/restapiaddressservices/";
  }

}