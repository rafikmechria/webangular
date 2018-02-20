import { Component } from '@angular/core';
import { initializeApp,database } from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {

    this.items = db.collection('courses').valueChanges();
    this.items.subscribe(val=>console.log(val));
  }
 
  }

}
