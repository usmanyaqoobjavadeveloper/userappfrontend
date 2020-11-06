import { Component, OnInit } from '@angular/core';
import { UserService } from './post/userservice.service';
import { User } from './post/user';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   
  users: User[] = [];
  
  constructor(public postService: UserService) { }
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
  
  deleteUser(id){
    this.postService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.userid !== id);
         console.log('User deleted successfully!');
    })
  }
}