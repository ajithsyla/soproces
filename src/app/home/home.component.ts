import { Component, OnInit } from '@angular/core';
import{ LoginService } from '../service/login.service';
// import{ UserService } from '../users/user.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    posts:Post[];
    userId:userId[];
    res:res[];
    selectdval : Selectdval[] = [];
    selectdvale:selectdvale[] = [];
    date:Date[] = [];

//implements OnInit , private userService:UserService
 constructor(private loginService:LoginService, private http:Http) { 

 }
 ngOnInit(){
    this.loginService.getPosts().subscribe(posts => {this.posts=posts});
 }

servercall(){
  // console.log(i);
  let userId = this.selectdval.toString();
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
     .map(userId => userId.json()).subscribe(userId => {this.userId=userId});
}

  onSelectval(value, event){
    if(event.target.checked){
          this.selectdval.push(value);
        }
        else if (!event.target.checked){
          let indexx = this.selectdval.indexOf(value);
          this.selectdval.splice(indexx,1);
        }
        console.log(this.selectdval);
  }
  
  onSelectvale(value, event){
    if(event.target.checked){
          this.selectdvale.push(value);
        }
        else if (!event.target.checked){
          let indexx = this.selectdvale.indexOf(value);
          this.selectdvale.splice(indexx,1);
        }
        console.log(this.selectdvale);
  }
  
onSelected(val){
    console.log(val);
    let str = val;
    this.res = str.split("/");
    console.log(this.res);
  }

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
interface res{

}

interface Selectdval{
  id:number;
}

interface selectdvale{

}
