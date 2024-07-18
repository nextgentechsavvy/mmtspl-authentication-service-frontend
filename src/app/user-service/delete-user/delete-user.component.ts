import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})


export class DeleteUserComponent {

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
      //this.router.navigate(['delete-user']);
  }

/*   onSubmit(){
    //this.deleteUserSearchById(this.user.userId);
     this.userService.getUserById(this.user.userId).subscribe( data =>{
        //this.goToUserList();
        this.deleteUserSearchById(this.user.userId);
      }
      , error => console.log(error)); 
  }
 */
 /*  goToUserList(){
    this.router.navigate(['/users']);
  } */


 /*  deleteUserSearchByIdRefresh(){
    this.router.navigate(['delete-employe']);
  } */

  deleteUserSearchById(userIdVal: number){
    this.router.navigate(['delete-user-search-id', userIdVal]);
    //this.deleteUserSearchByIdRefresh();
  }


  deleteUserSearchByName(userNameVal: String){
    //this.router.navigate(['user-details-name', userName]);
     this.router.navigate(['delete-user-search-name', userNameVal]);
  }

  /* deleteUserById(userIdVal: number){
    this.router.navigate(['delete-user-id', userIdVal]);
  } */

  deleteUserById(userId: number){
    this.userService.deleteUserById(userId).subscribe( data => {
      console.log(data);
      //this.getUsers();
      this.router.navigate(['delete-user']);
    })
  }
  
}