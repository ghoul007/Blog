import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSignIn: FormGroup;
  errorMessage: any;
  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formSignIn = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  signin() {
    const email = this.formSignIn.get('email').value;
    const password = this.formSignIn.get('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['posts'])
      },
      (error) => {
        this.errorMessage = error
      }
    )
  }
}
