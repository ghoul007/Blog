import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  formNewPost: FormGroup;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder, private postService: PostService) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formNewPost = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    })
  }


  newPost() {

    const title = this.formNewPost.get('title').value;
    const content = this.formNewPost.get('content').value;
    const post = new Post(title, content, 0)
    this.postService.createNewPost(post);
  

  }
}
