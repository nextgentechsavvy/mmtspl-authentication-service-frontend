import { Component, OnInit } from '@angular/core';
import { Department } from '../department'
import { DepartmentService } from '../department.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

  //departments: Department[] | undefined;
  departments: Array<Department> = [];
  //department: Department = new Department();

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments(){
    this.departmentService.getDepartmentsList().subscribe(data => {
      this.departments = data;
    });
  }

  departmentDetails(departmentId: number){
    this.router.navigate(['department-details', departmentId]);
  }

  updateDepartmentById(departmentId: number){
    this.router.navigate(['update-department-id', departmentId]);
  }

  deleteDepartmentById(departmentId: number){
    this.departmentService.deleteDepartmentById(departmentId).subscribe( data => {
      console.log(data);
      this.getDepartments();
    })
  }



  departmentDetailsByName(departmentName: String){
    this.router.navigate(['department-details-name', departmentName]);
  }

}