import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeId: number=0;
  employeeName: String='';
  employee: Employee = new Employee();

  employeeNameVal: String = "";
  employeeIdVal: number = 0;

  //employees: Employee[] | undefined;
   employees: Array<Employee> = [];

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.employeeIdVal = this.route.snapshot.params['employeeIdVal'];
      this.employeeNameVal = this.route.snapshot.params['employeeNameVal'];

      if(this.employeeIdVal != null){
          this.employeeService.getEmployeeById(this.employeeIdVal).subscribe(data => {
            this.employee = data;
            this.employees.push(this.employee);
          }, error => console.log(error)); 
        //this.employeeIdVal = 0;

      }else{
        //this.employee = new Employee();
        this.employeeService.getEmployeeByName(this.employeeNameVal).subscribe( data => {
          this.employees = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateEmployeeSearchById(this.employee.employeeId);
     this.employeeService.getEmployeeById(this.employee.employeeId).subscribe( data =>{
        //this.goToEmployeeList();
        this.updateEmployeeSearchById(this.employee.employeeId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToEmployeeList(){
    this.router.navigate(['/employees']);
  } */


 /*  updateEmployeeSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateEmployeeSearchById(employeeIdVal: number){
    this.router.navigate(['update-employee-search-id', employeeIdVal]);
    //this.updateEmployeeSearchByIdRefresh();
  }


  updateEmployeeSearchByName(employeeNameVal: String){
    //this.router.navigate(['employee-details-name', employeeName]);
     this.router.navigate(['update-employee-search-name', employeeNameVal]);
  }

  updateEmployeeById(employeeIdVal: number){
    this.router.navigate(['update-employee-id', employeeIdVal]);
  }

  
}
