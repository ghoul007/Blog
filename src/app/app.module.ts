import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './services/auth.guard';
import { NewPostComponent } from './new-post/new-post.component';
import { PostService } from './services/post.service';
import { PostViewComponent } from './post-list/post-view/post-view.component';


const routes: Routes = [
  { path: "posts", component: PostListComponent, canActivate: [AuthGuard] },
  { path: "post/new", component: NewPostComponent, canActivate: [AuthGuard] },
  { path: "post/view/:id", component: PostViewComponent, canActivate: [AuthGuard] },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "**", redirectTo: "posts" },
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    NewPostComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
