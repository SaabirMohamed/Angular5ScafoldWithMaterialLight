import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Item} from './item.model';
import { Article } from './article.model';

@Injectable()
export class FstoreService {
  private itemDoc: AngularFirestoreDocument<Item>;
  private articleCollection: AngularFirestoreCollection<Article>;
  public item: Observable<Item>;
  public article: Observable<Article>;
  private homepage = 'homepage';

  constructor(public afs: AngularFirestore) { }
  getPageDocs(docId: string): Observable<Item> {
    this.itemDoc = this.afs.doc<Item>(`modules/${docId}`);
    this.item = this.itemDoc.valueChanges();
    return this.item;

  }

  updateDocField(updateData: any, docId: string) {
     this.itemDoc.update(updateData);
  }

  AddArticle(article: Article, docId: string, colecId: string) {
    // add a new Article to the collection on homepage
    this.articleCollection = this.afs.collection(`modules/${docId}/${colecId}`);
    this.articleCollection.add(article);

  }

}
