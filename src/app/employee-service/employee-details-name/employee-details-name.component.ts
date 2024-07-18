import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details-name',
  templateUrl: './employee-details-name.component.html',
  styleUrls: ['./employee-details-name.component.css']
})

export class EmployeeDetailsNameComponent implements OnInit {

  employeeName: String='';
  employee: Employee = new Employee();
  //employees: Employee[] | undefined;
  employees: Array<Employee> = [];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: EmployeeService) { }


  ngOnInit(): void {
    this.employeeName = this.route.snapshot.params['employeeName'];

    //this.employee = new Employee();
    this.employeService.getEmployeeByName(this.employeeName).subscribe( data => {
      this.employees = data;
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
