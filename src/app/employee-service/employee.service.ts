import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeCompleteDetails } from './employee-complete-details';
import { HostDetails } from '../host-details';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
  
  private localHostAddress: any;


  //MMTSPL Service call REST API
  private employee_service_baseUrl = "http://192.168.35.13:9000/restapiemployeeservices/";
  
  //MMTSPL Service call Zull API Gateway
  //private employee_service_baseUrl = "http://localhost:8765/mmtspl-employee-service/restapiemployeeservices/";
 
  //Docker-k8s Calling
  //private employee_service_baseUrl = "http://192.168.223.13:30900/restapiemployeeservices/";


  
  private employee_service_baseUrlgetAllEmployeeUrl = "getAllEmployee";
  private employee_service_baseUrlgetEmployeeByIdUrl = "getEmployeeById/";
  private employee_service_baseUrladdEmployeeUrl = "addEmployee/";
  private employee_service_baseUrlupdateEmployeeUrl = "updateEmployee/";
  private employee_service_baseUrlupdateEmployeeByIdUrl = "updateEmployeeById/";
  private employee_service_baseUrldeleteEmployeeUrl = "deleteEmployee/";
  private employee_service_baseUrlgetEmployeeByNameUrl = "getEmployeeByName/";
  
  private employee_service_baseUrlgetEmployeeCompleteDetailsListUrl = "getEmployeeCompleteDetailsList";
  
  

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.employee_service_baseUrl + this.employee_service_baseUrlgetAllEmployeeUrl}`);
  }


  getEmployeeById(employeeId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.employee_service_baseUrl + this.employee_service_baseUrlgetEmployeeByIdUrl} ${employeeId}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.employee_service_baseUrl + this.employee_service_baseUrladdEmployeeUrl}`, employee);
  }

  
  updateEmployeeById(employeeId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.employee_service_baseUrl + this.employee_service_baseUrlupdateEmployeeByIdUrl} ${employeeId}`, employee);
  }

  deleteEmployeeById(employeeId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.employee_service_baseUrl + this.employee_service_baseUrldeleteEmployeeUrl} ${employeeId}`);
    return this.httpClient.get(`${this.employee_service_baseUrl + this.employee_service_baseUrldeleteEmployeeUrl} ${employeeId}`);
  }



  getEmployeeByName(employeeName: String): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.employee_service_baseUrl + this.employee_service_baseUrlgetEmployeeByNameUrl} ${employeeName}`);
  }
  updateEmployee(employeeId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.employee_service_baseUrl + this.employee_service_baseUrlupdateEmployeeUrl} ${employeeId}`, employee);
  }

  deleteEmployee(employeeId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.employee_service_baseUrl + this.employee_service_baseUrldeleteEmployeeUrl} ${employeeId}`);
    return this.httpClient.get(`${this.employee_service_baseUrl + this.employee_service_baseUrldeleteEmployeeUrl} ${employeeId}`);
  }

  
  
  getEmployeeCompleteDetailsList(): Observable<EmployeeCompleteDetails[]>{
	  //return this.httpClient.get<EmployeeCompleteDetails[]>(`${this.employee_service_baseUrl + this.employee_service_baseUrlgetEmployeeCompleteDetailsListUrl}`);
	  return this.httpClient.get<EmployeeCompleteDetails[]>("http://localhost:9000/restapiemployeeservices/getEmployeeCompleteDetailsList");
  }
  
  
  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
  
  setLocalHostAddress(hostDetails: HostDetails){
    this.employee_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9000/restapiemployeeservices/";
  }




}