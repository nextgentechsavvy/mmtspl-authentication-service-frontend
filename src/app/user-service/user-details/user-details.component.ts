import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  userId: number=0;
  user: User | undefined;
  //user: User = new User();
  //users: User[] | undefined;
  users: Array<User> = [];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.user = new User();
    this.userService.getUserById(this.userId).subscribe( data => {
      this.user = data;
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