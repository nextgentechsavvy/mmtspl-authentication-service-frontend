import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  //users: User[] | undefined;
  users: Array<User> = [];
  //user: User = new User();

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
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



  userDetailsByName(userName: String){
    this.router.navigate(['user-details-name', userName]);
  }

}