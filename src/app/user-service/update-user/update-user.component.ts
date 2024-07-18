import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: number=0;
  userName: String='';
  user: User = new User();

  userNameVal: String = "";
  userIdVal: number = 0;

  //users: User[] | undefined;
   users: Array<User> = [];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
      this.userIdVal = this.route.snapshot.params['userIdVal'];
      this.userNameVal = this.route.snapshot.params['userNameVal'];

      if(this.userIdVal != null){
          this.userService.getUserById(this.userIdVal).subscribe(data => {
            this.user = data;
            this.users.push(this.user);
          }, error => console.log(error)); 
        //this.userIdVal = 0;

      }else{
        //this.user = new User();
        this.userService.getUserByName(this.userNameVal).subscribe( data => {
          this.users = data;
        }, error => console.log(error)); 
      }
  }

/*   onSubmit(){
    //this.updateUserSearchById(this.user.userId);
     this.userService.getUserById(this.user.userId).subscribe( data =>{
        //this.goToUserList();
        this.updateUserSearchById(this.user.userId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToUserList(){
    this.router.navigate(['/users']);
  } */


 /*  updateUserSearchByIdRefresh(){
    this.router.navigate(['update-employe']);
  } */

  updateUserSearchById(userIdVal: number){
    this.router.navigate(['update-user-search-id', userIdVal]);
    //this.updateUserSearchByIdRefresh();
  }


  updateUserSearchByName(userNameVal: String){
    //this.router.navigate(['user-details-name', userName]);
     this.router.navigate(['update-user-search-name', userNameVal]);
  }

  updateUserById(userIdVal: number){
    this.router.navigate(['update-user-id', userIdVal]);
  }

  
}