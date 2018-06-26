import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item { nombre: string; url:string }


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  
  constructor(private afs: AngularFirestore) {
  	this.itemsCollection = afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
   }

  ngOnInit() {
  }

}
