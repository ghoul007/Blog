import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onLove() {
    this.post.loveIts++;
    this.postService.updatePost(this.index, this.post)
  }
  
  onDontLove() {
    this.post.loveIts--;
    this.postService.updatePost(this.index, this.post)
  }

  remove(post) {
    this.postService.removePost(post);
  }

  displayPost() {
    this.router.navigate(['/post', 'view', this.index])
  }
}
