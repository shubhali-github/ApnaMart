import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('username');
  }

  isLogin() {
    if (localStorage.getItem('username') != null) return true;
    return false;
  }
}
