import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})


export class DeleteEmployeeComponent {

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
      //this.router.navigate(['delete-employee']);
  }

/*   onSubmit(){
    //this.deleteEmployeeSearchById(this.employee.employeeId);
     this.employeeService.getEmployeeById(this.employee.employeeId).subscribe( data =>{
        //this.goToEmployeeList();
        this.deleteEmployeeSearchById(this.employee.employeeId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToEmployeeList(){
    this.router.navigate(['/employees']);
  } */


 /*  deleteEmployeeSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteEmployeeSearchById(employeeIdVal: number){
    this.router.navigate(['delete-employee-search-id', employeeIdVal]);
    //this.deleteEmployeeSearchByIdRefresh();
  }


  deleteEmployeeSearchByName(employeeNameVal: String){
    //this.router.navigate(['employee-details-name', employeeName]);
     this.router.navigate(['delete-employee-search-name', employeeNameVal]);
  }

  /* deleteEmployeeById(employeeIdVal: number){
    this.router.navigate(['delete-employee-id', employeeIdVal]);
  } */

  deleteEmployeeById(employeeId: number){
    this.employeeService.deleteEmployeeById(employeeId).subscribe( data => {
      console.log(data);
      //this.getEmployees();
      this.router.navigate(['delete-employee']);
    })
  }
  
}

