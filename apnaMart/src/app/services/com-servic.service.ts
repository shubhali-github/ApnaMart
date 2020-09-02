import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

// import { MOBPARTS } from './../products/mob-part/mock-data'; // 1000000 rec
// import { DBMOBPARTS } from './../database/db';

@Injectable({
  providedIn: 'root',
})
export class ComServic {
  constructor(private http: Http) {}
  // let paginator = 0;
  getMobParts() {
    // data logic
    // paginator++;
    // console.log("ComServic -> getMobParts -> paginator", paginator)
    //return DBMOBPARTS; // 10

    return this.http
      .get('./../../assets/API/mob-parts.json')
      .pipe(map((res) => res.json().apiData));
  }
  getLapParts(){
    return this.http
      .get('./../../assets/API/lap-parts.json')
      .pipe(map((res) => res.json().lapyData));
  }
}
