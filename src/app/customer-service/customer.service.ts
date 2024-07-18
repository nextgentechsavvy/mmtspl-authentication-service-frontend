import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
  
	  
  private localHostAddress: any;
  
  //private customer_service_baseUrl = "http://192.168.1.5:9003/restapicustomerservices/";
  //MMTSPL Service call REST API
  //private customer_service_baseUrl = "http://192.168.1.4:9003/restapicustomerservices/";
  
  //MMTSPL Service call Zull API Gateway
  private customer_service_baseUrl = "http://localhost:8765/mmtspl-customer-service/restapicustomerservices/";


  private customer_service_baseUrlgetAllCustomerUrl = "getAllCustomer";
  private customer_service_baseUrlgetCustomerByIdUrl = "getCustomerById/";
  private customer_service_baseUrladdCustomerUrl = "addCustomer/";
  private customer_service_baseUrlupdateCustomerUrl = "updateCustomer/";
  private customer_service_baseUrlupdateCustomerByIdUrl = "updateCustomerById/";
  private customer_service_baseUrldeleteCustomerUrl = "deleteCustomer/";
  private customer_service_baseUrlgetCustomerByNameUrl = "getCustomerByName/";

  constructor(private httpClient: HttpClient) { }
  
  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.customer_service_baseUrl + this.customer_service_baseUrlgetAllCustomerUrl}`);
  }


  getCustomerById(customerId: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.customer_service_baseUrl + this.customer_service_baseUrlgetCustomerByIdUrl} ${customerId}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.customer_service_baseUrl + this.customer_service_baseUrladdCustomerUrl}`, customer);
  }

  
  updateCustomerById(customerId: number, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.customer_service_baseUrl + this.customer_service_baseUrlupdateCustomerByIdUrl} ${customerId}`, customer);
  }

  deleteCustomerById(customerId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.customer_service_baseUrl + this.customer_service_baseUrldeleteCustomerUrl} ${customerId}`);
    return this.httpClient.get(`${this.customer_service_baseUrl + this.customer_service_baseUrldeleteCustomerUrl} ${customerId}`);
  }



  getCustomerByName(customerName: String): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.customer_service_baseUrl + this.customer_service_baseUrlgetCustomerByNameUrl} ${customerName}`);
  }
  updateCustomer(customerId: number, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.customer_service_baseUrl + this.customer_service_baseUrlupdateCustomerUrl} ${customerId}`, customer);
  }

  deleteCustomer(customerId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.customer_service_baseUrl + this.customer_service_baseUrldeleteCustomerUrl} ${customerId}`);
    return this.httpClient.get(`${this.customer_service_baseUrl + this.customer_service_baseUrldeleteCustomerUrl} ${customerId}`);
  }
  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
	  
  setLocalHostAddress(hostDetails: HostDetails){
    this.customer_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9003/restapicustomerservices/";
  }  
}