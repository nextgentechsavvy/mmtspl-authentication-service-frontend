import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
//import { HostDetails } from '.../host-details';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  //employees: Employee[] | undefined;
  employees: Array<Employee> = [];
  //employee: Employee = new Employee();
  //hostDetails: HostDetails = new HostDetails();
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    /*
	this.employeeService.getLocalHostAddress().subscribe(data => {
      this.hostDetails = data;
       console.log("this.hostDetails :: ", data);
       this.employeeService.setLocalHostAddress(this.hostDetails);
    });
    */
    
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  
  employeeDetails(employeeId: number){
    this.router.navigate(['employee-details', employeeId]);
  }

  updateEmployeeById(employeeId: number){
    this.router.navigate(['update-employee-id', employeeId]);
  }

  deleteEmployeeById(employeeId: number){
    this.employeeService.deleteEmployeeById(employeeId).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }



  employeeDetailsByName(employeeName: String){
    this.router.navigate(['employee-details-name', employeeName]);
  }

}