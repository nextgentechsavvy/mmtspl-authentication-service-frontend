import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details-name',
  templateUrl: './user-details-name.component.html',
  styleUrls: ['./user-details-name.component.css']
})

export class UserDetailsNameComponent implements OnInit {

  userName: String='';
  user: User = new User();
  //users: User[] | undefined;
  users: Array<User> = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }


  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];

    //this.user = new User();
    this.userService.getUserByName(this.userName).subscribe( data => {
      this.users = data;
    });
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
    this.router.navigate(['users']);
  }
  userDetails(userId: number){
    this.router.navigate(['user-details', userId]);
  }

  updateUserById(userId: number){
    this.router.navigate(['update-user-id', userId]);
  }

  deleteUserById(userId: number){
    this.userService.deleteUserById(userId).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
}