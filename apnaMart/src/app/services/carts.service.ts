import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartsService {

//instatnce of sub
subject=new Subject()
  constructor() { }
  getcart(){
  return this.subject.asObservable()
  }
  sendcart(prod){
  //  console.log(prod);
this.subject.next(prod)
  }
  
}
