import { Component } from '@angular/core';
import { EmployeeCompleteDetails } from '../employee-complete-details';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
//import { HostDetails } from '.../host-details';


@Component({
  selector: 'app-employee-complete-details-list',
  templateUrl: './employee-complete-details-list.component.html',
  styleUrls: ['./employee-complete-details-list.component.css']
})
export class EmployeeCompleteDetailsListComponent {

	  //hostDetails: HostDetails = new HostDetails();
	  employeeCompleteDetails: Array<EmployeeCompleteDetails> = [];
	  
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
	    
	    this.getEmployeeCompleteDetailsList();
	    
	  }

	  private getEmployeeCompleteDetailsList(){
		  this.employeeService.getEmployeeCompleteDetailsList().subscribe(data => {
			  this.employeeCompleteDetails = data;
		  });
	  }
	  
	  /*
	  employeeDetails(employeeId: number){
	    this.router.navigate(['employee-details', employeeId]);
	  }

	  updateEmployeeById(employeeId: number){
	    this.router.navigate(['update-employee-id', employeeId]);
	  }

	  deleteEmployeeById(employeeId: number){
	    this.employeeService.deleteEmployeeById(employeeId).subscribe( data => {
	      console.log(data);
	      this.getEmployeeCompleteDetailsList();
	    })
	  }



	  employeeDetailsByName(employeeName: String){
	    this.router.navigate(['employee-details-name', employeeName]);
	  }
*/
	
}
