import { Component } from '@angular/core';
import *  as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    var config = {
      apiKey: "AIzaSyBi1jDXuhq2_obHdlGQpvNUJTBcMGdPs9Y",
      authDomain: "blogs-e4ccc.firebaseapp.com",
      databaseURL: "https://blogs-e4ccc.firebaseio.com",
      projectId: "blogs-e4ccc",
      storageBucket: "blogs-e4ccc.appspot.com",
      messagingSenderId: "664339159936"
    };
    firebase.initializeApp(config);
  }

}
