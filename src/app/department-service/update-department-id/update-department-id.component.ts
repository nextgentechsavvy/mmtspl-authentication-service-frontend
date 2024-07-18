import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department-id',
  templateUrl: './update-department-id.component.html',
  styleUrls: ['./update-department-id.component.css']
})

export class UpdateDepartmentIdComponent implements OnInit {

  departmentId: number=0;
  department: Department = new Department();
  
  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.departmentId = this.route.snapshot.params['departmentId'];

    this.departmentService.getDepartmentById(this.departmentId).subscribe(data => {
      this.department = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.departmentService.updateDepartmentById(this.departmentId, this.department).subscribe( data =>{
        this.goToDepartmentList();
      }
      , error => console.log(error));
  }

  goToDepartmentList(){
    this.router.navigate(['/departments']);
  }
}
