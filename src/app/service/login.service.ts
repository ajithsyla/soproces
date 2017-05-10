import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/RX'

@Injectable()
export class LoginService {
  constructor(private http:Http) {
}
 getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts')
     .map(post => post.json());
    }

}
