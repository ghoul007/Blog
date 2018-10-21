import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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


  signup() {
    const email = this.formSignIn.get('email').value;
    const password = this.formSignIn.get('password').value;
    console.log(email, password);


    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      () => {
        this.router.navigate(['posts'])
      },
      (error) => {
        this.errorMessage = error
      }
    )
  }
}
