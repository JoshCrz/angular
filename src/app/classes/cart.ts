import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class Cart {

  private details: BehaviorSubject<any> = new BehaviorSubject<any>(null)

  update = (d) => {
    this.details.next(d);
  }

  //get is an observable - so it can be watched and responded to in any component
  get(): Observable<any> {
    return this.details.asObservable();
  }

    //idea - load this class with local storage data on app init. Then use the cart class as the reference across the entire app, 
    //this would alleviate the need to constantly GET from local storage/an api.
    

}