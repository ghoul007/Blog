import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
  post:  Post;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.postService.getPostByID(id).then(
      (ele: Post) => {
        this.post = ele;
      }
    )
  }

}
