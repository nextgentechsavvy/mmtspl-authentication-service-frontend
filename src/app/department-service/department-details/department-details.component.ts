import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})

export class DepartmentDetailsComponent implements OnInit {

  departmentId: number=0;
  department: Department | undefined;
  //department: Department = new Department();
  //departments: Department[] | undefined;
  departments: Array<Department> = [];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentId = this.route.snapshot.params['departmentId'];

    this.department = new Department();
    this.employeService.getDepartmentById(this.departmentId).subscribe( data => {
      this.department = data;
    });
  }

  private getDepartments(){
    this.employeService.getDepartmentsList().subscribe(data => {
      this.departments = data;
    });
    this.router.navigate(['departments']);
  }
  departmentDetails(departmentId: number){
    this.router.navigate(['department-details', departmentId]);
  }

  updateDepartmentById(departmentId: number){
    this.router.navigate(['update-department-id', departmentId]);
  }

  deleteDepartmentById(departmentId: number){
    this.employeService.deleteDepartmentById(departmentId).subscribe( data => {
      console.log(data);
      this.getDepartments();
    })
  }
}
