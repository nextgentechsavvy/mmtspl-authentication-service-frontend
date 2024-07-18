import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css']
})


export class DeleteDepartmentComponent {

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
      //this.router.navigate(['delete-department']);
  }

/*   onSubmit(){
    //this.deleteDepartmentSearchById(this.department.departmentId);
     this.departmentService.getDepartmentById(this.department.departmentId).subscribe( data =>{
        //this.goToDepartmentList();
        this.deleteDepartmentSearchById(this.department.departmentId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToDepartmentList(){
    this.router.navigate(['/departments']);
  } */


 /*  deleteDepartmentSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteDepartmentSearchById(departmentIdVal: number){
    this.router.navigate(['delete-department-search-id', departmentIdVal]);
    //this.deleteDepartmentSearchByIdRefresh();
  }


  deleteDepartmentSearchByName(departmentNameVal: String){
    //this.router.navigate(['department-details-name', departmentName]);
     this.router.navigate(['delete-department-search-name', departmentNameVal]);
  }

  /* deleteDepartmentById(departmentIdVal: number){
    this.router.navigate(['delete-department-id', departmentIdVal]);
  } */

  deleteDepartmentById(departmentId: number){
    this.departmentService.deleteDepartmentById(departmentId).subscribe( data => {
      console.log(data);
      //this.getDepartments();
      this.router.navigate(['delete-department']);
    })
  }
  
}

