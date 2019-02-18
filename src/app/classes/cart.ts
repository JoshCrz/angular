import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Cart {

  private details: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public loading$ = this.details.asObservable();

  update = (d) => {
    console.log('cart updated from class!')
    console.log(d)
    this.details.next(d);
  }

  //get is an observable - so it can be watched and responded to in any component
  get(): Observable<any> {
    this.details.next(true);
    return this.details.asObservable();
  }


}