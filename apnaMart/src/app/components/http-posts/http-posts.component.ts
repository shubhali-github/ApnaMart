import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-posts',
  templateUrl: './http-posts.component.html',
  styles: [],
})
export class HttpPostsComponent implements OnInit {
  posts;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getPost().subscribe((res) => {
      console.log(' res : ', res.json());
      this.posts = res.json();
    },error=>{
      console.log("error",error);
      alert("some error occure on server");
    }
    );
  }
  createPost(newTitle: HTMLInputElement) {
    console.clear();
    console.log('newTitle : ', newTitle);
    let post = { title: newTitle.value };
    this.apiService.sendPost(post).subscribe((res) => {
      console.log('res : ', res.json());
      let title = res.json().title;
      let id = res.json().id;
      // this.posts.push({ id, title });
      this.posts.splice(0, 0, { id, title });
    });
  }

  updatePost(post) {
    console.clear();
    console.log(' post : ', post);
    //the below code your wrote to  just convert objc data into json format usenig stringify method
    // let obj = {
    //   id: 1,
    //   userId: 10,
    //   title: 'dummy data',
    //   body: 'some text',
    // };
    // let myData=JSON.stringify(obj);
    this.apiService
      .putPost(post.id, { title: 'shubhali harode' })
      .subscribe((res) => {
        console.log('res', res.json());
        //to update the value we want index of that obj
        let index = this.posts.indexOf(post);
        console.log('HttpPostsComponent -> updatePost -> index', index);

        let updatedPost = {
          id: res.json().id,
          title: res.json().title,
          // userId: res.json().userId,
          // body: res.json().body,
        };
        //the below code show updated data at 1st index
        this.posts.splice(index, 1, updatedPost);
      });
  }
  deletePost(post) {
    this.apiService.deletePost(post.id).subscribe((res) => {
      console.log('delete:', res.json());
      //the below code delete element by getting its id and store it in index
      // let index=this.posts.indexOf(post.id);
      // this.posts.splice(index,1);

      //to get index value we directly subtract 1,bcoz index start with 0
      this.posts.splice(post.id - 1, 1);
    });
  }
}
