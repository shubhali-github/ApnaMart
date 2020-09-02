import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //this url contain dummy data
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }
  getPost() {
    return this.http.get(this.url);
  }
  sendPost(post) {
    return this.http.post(this.url, post);
  }
  putPost(postId, myData) {
    console.log('ApiService -> putPost -> myData', myData);
    return this.http.put(this.url + '/' + postId, myData);
  }
  deletePost(postId) {
    return this.http.delete(this.url + '/' + postId);
  }
}
