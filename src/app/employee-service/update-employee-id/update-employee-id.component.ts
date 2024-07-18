import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee-id',
  templateUrl: './update-employee-id.component.html',
  styleUrls: ['./update-employee-id.component.css']
})

export class UpdateEmployeeIdComponent implements OnInit {

  employeeId: number=0;
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];

    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.employeeId, this.employee).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
