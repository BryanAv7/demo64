import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) { }

    getAllPost(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    getAllPhotos(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    getAllcomments(Id: number) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/'  + Id+ '/comments')
    }
}
