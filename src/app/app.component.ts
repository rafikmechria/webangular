import { Component } from '@angular/core';
import { initializeApp,database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){

     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAdrTwCzvd1JP3GURbYNVeJaInVclv1wxs",
    authDomain: "buymore-82df5.firebaseapp.com",
    databaseURL: "https://buymore-82df5.firebaseio.com",
    projectId: "buymore-82df5",
    storageBucket: "buymore-82df5.appspot.com",
    messagingSenderId: "744617899007"
  };
  initializeApp(config);
  var rootRef = database().ref('lessons');
rootRef.on('value',function(snap){
console.log(snap.key,snap.val());
  });

  }
}
