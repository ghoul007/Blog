import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: any = []
  postSubscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsubject.subscribe((data: Post[]) => {
      this.posts = data;
    })
    this.postService.getPost();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
