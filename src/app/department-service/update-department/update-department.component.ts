import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  departmentId: number=0;
  departmentName: String='';
  department: Department = new Department();

  departmentNameVal: String = "";
  departmentIdVal: number = 0;

  //departments: Department[] | undefined;
   departments: Array<Department> = [];

  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.departmentIdVal = this.route.snapshot.params['departmentIdVal'];
      this.departmentNameVal = this.route.snapshot.params['departmentNameVal'];

      if(this.departmentIdVal != null){
          this.departmentService.getDepartmentById(this.departmentIdVal).subscribe(data => {
            this.department = data;
            this.departments.push(this.department);
          }, error => console.log(error)); 
        //this.departmentIdVal = 0;

      }else{
        //this.department = new Department();
        this.departmentService.getDepartmentByName(this.departmentNameVal).subscribe( data => {
          this.departments = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateDepartmentSearchById(this.department.departmentId);
     this.departmentService.getDepartmentById(this.department.departmentId).subscribe( data =>{
        //this.goToDepartmentList();
        this.updateDepartmentSearchById(this.department.departmentId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToDepartmentList(){
    this.router.navigate(['/departments']);
  } */


 /*  updateDepartmentSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateDepartmentSearchById(departmentIdVal: number){
    this.router.navigate(['update-department-search-id', departmentIdVal]);
    //this.updateDepartmentSearchByIdRefresh();
  }


  updateDepartmentSearchByName(departmentNameVal: String){
    //this.router.navigate(['department-details-name', departmentName]);
     this.router.navigate(['update-department-search-name', departmentNameVal]);
  }

  updateDepartmentById(departmentIdVal: number){
    this.router.navigate(['update-department-id', departmentIdVal]);
  }

  
}
