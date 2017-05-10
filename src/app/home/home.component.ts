import { Component, OnInit } from '@angular/core';
import{ LoginService } from '../service/login.service';
// import{ UserService } from '../users/user.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/RX'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

posts:Post[];
userId:userId[];

  //  implements OnInit , private userService:UserService
 constructor(private loginService:LoginService, private http:Http) { 
   this.loginService.getPosts().subscribe(posts => {this.posts=posts});
  //  this.userService.getUser().subscribe(users => {this.users=users});
 }
  // ngOnInit() {
  // }
onSelect(id){
  // console.log(i);
    //console.log(id);
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
     .map(userId => userId.json()).subscribe(userId => {this.userId=userId});
     
}

onSelected(val){
  console.log(val);
}

miltonLocation=["one","two","three"]
}
interface Post{
    id:number;
    title:string;
    body:string;
}
interface userId{
    id:number;
    title:string;
    userId:string;
    body:string;
}