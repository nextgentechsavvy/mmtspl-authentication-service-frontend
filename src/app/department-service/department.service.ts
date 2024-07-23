import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Department } from './department';
import { HostDetails } from '../host-details';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //MMTSPL Service call REST API
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:9008/cloud-config-db-service-local-host/getLocalHostAddress";
	  
  //MMTSPL Service call Zull API Gateway
  private cloud_config_db_service_baseUrl = "http://localhost:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";
  //private cloud_config_db_service_baseUrl = "http://192.168.1.4:8765/mmtspl-cloud-config-db-service/cloud-config-db-service-local-host/getLocalHostAddress";  
	  
  private localHostAddress: any;


  //MMTSPL Service call REST API
  private department_service_baseUrl = "http://192.168.35.13:9001/restapidepartmentservices/";
  
  //MMTSPL Service call Zull API Gateway
  //private department_service_baseUrl = "http://localhost:8765/mmtspl-department-service/restapidepartmentservices/";
  
  //Docker-k8s Calling
  //private department_service_baseUrl = "http://192.168.119.13:30901/restapidepartmentservices/";
  
  


  private department_service_baseUrlgetAllDepartmentUrl = "getAllDepartment";
  private department_service_baseUrlgetDepartmentByIdUrl = "getDepartmentById/";
  private department_service_baseUrladdDepartmentUrl = "addDepartment/";
  private department_service_baseUrlupdateDepartmentUrl = "updateDepartment/";
  private department_service_baseUrlupdateDepartmentByIdUrl = "updateDepartmentById/";
  private department_service_baseUrldeleteDepartmentUrl = "deleteDepartment/";
  private department_service_baseUrlgetDepartmentByNameUrl = "getDepartmentByName/";

  constructor(private httpClient: HttpClient) { }
  
  getDepartmentsList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.department_service_baseUrl + this.department_service_baseUrlgetAllDepartmentUrl}`);
  }


  getDepartmentById(departmentId: number): Observable<Department>{
    return this.httpClient.get<Department>(`${this.department_service_baseUrl + this.department_service_baseUrlgetDepartmentByIdUrl} ${departmentId}`);
  }

  createDepartment(department: Department): Observable<Object>{
    return this.httpClient.post(`${this.department_service_baseUrl + this.department_service_baseUrladdDepartmentUrl}`, department);
  }

  
  updateDepartmentById(departmentId: number, department: Department): Observable<Object>{
    return this.httpClient.put(`${this.department_service_baseUrl + this.department_service_baseUrlupdateDepartmentByIdUrl} ${departmentId}`, department);
  }

  deleteDepartmentById(departmentId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.department_service_baseUrl + this.department_service_baseUrldeleteDepartmentUrl} ${departmentId}`);
    return this.httpClient.get(`${this.department_service_baseUrl + this.department_service_baseUrldeleteDepartmentUrl} ${departmentId}`);
  }



  getDepartmentByName(departmentName: String): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.department_service_baseUrl + this.department_service_baseUrlgetDepartmentByNameUrl} ${departmentName}`);
  }
  updateDepartment(departmentId: number, department: Department): Observable<Object>{
    return this.httpClient.put(`${this.department_service_baseUrl + this.department_service_baseUrlupdateDepartmentUrl} ${departmentId}`, department);
  }

  deleteDepartment(departmentId: number): Observable<Object>{
    //return this.httpClient.delete(`${this.department_service_baseUrl + this.department_service_baseUrldeleteDepartmentUrl} ${departmentId}`);
    return this.httpClient.get(`${this.department_service_baseUrl + this.department_service_baseUrldeleteDepartmentUrl} ${departmentId}`);
  }
  
  
  
  getLocalHostAddress(): Observable<HostDetails>{
    return this.httpClient.get<HostDetails>(`${this.cloud_config_db_service_baseUrl}`);
  }
	  
  setLocalHostAddress(hostDetails: HostDetails){
    this.department_service_baseUrl = "http://" + hostDetails.localHostAddress + ":9001/restapidepartmentservices/";
  }  
}
