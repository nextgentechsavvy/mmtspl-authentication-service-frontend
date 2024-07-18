import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  employeeId: number=0;
  employee: Employee | undefined;
  //employee: Employee = new Employee();
  //employees: Employee[] | undefined;
  employees: Array<Employee> = [];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.employeeId).subscribe( data => {
      this.employee = data;
    });
  }

  private getEmployees(){
    this.employeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
    this.router.navigate(['employees']);
  }
  employeeDetails(employeeId: number){
    this.router.navigate(['employee-details', employeeId]);
  }

  updateEmployeeById(employeeId: number){
    this.router.navigate(['update-employee-id', employeeId]);
  }

  deleteEmployeeById(employeeId: number){
    this.employeService.deleteEmployeeById(employeeId).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
