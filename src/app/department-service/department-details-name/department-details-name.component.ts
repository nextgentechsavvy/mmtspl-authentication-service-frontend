import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-details-name',
  templateUrl: './department-details-name.component.html',
  styleUrls: ['./department-details-name.component.css']
})

export class DepartmentDetailsNameComponent implements OnInit {

  departmentName: String='';
  department: Department = new Department();
  //departments: Department[] | undefined;
  departments: Array<Department> = [];

  constructor(private route: ActivatedRoute, private router: Router, private employeService: DepartmentService) { }


  ngOnInit(): void {
    this.departmentName = this.route.snapshot.params['departmentName'];

    //this.department = new Department();
    this.employeService.getDepartmentByName(this.departmentName).subscribe( data => {
      this.departments = data;
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
