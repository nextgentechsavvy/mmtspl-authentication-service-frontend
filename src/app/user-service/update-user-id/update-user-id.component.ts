import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user-id',
  templateUrl: './update-user-id.component.html',
  styleUrls: ['./update-user-id.component.css']
})

export class UpdateUserIdComponent implements OnInit {

  userId: number=0;
  user: User = new User();
  
  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];

    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userService.updateUserById(this.userId, this.user).subscribe( data =>{
        this.goToUserList();
      }
      , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }
}