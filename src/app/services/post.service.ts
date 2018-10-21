import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsubject: Subject<Post[]>;
  posts: Post[] = [];

  constructor(private router: Router) {
    this.postsubject = new Subject<Post[]>();
  }

  emitPosts() {
    this.postsubject.next(this.posts);
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    firebase.database().ref('/posts').set(this.posts)
    this.router.navigate(['posts'])
  }

  getPost() {
    firebase.database().ref('/posts').on('value', (posts) => {
      this.posts = posts.val() ? posts.val() : []
      this.emitPosts();
    })
  }

  getPostByID(id: number) {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/posts/' + id).once('value').then(
        (post) => {
          resolve(post.val());
        }, (error) => {
          reject(error);
        })
    })
  }

  updatePost(id: number, post) {
    firebase.database().ref('/posts/' + id).set(
      post
    )
  }

  removePost(post) {
    const newList = this.posts.filter(res => res != post)
    firebase.database().ref('/posts').set(newList);
  }

}
