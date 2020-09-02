import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <p>
      Login
    </p>

    <!-- step: 6 => create UI to get 'username' & 'password' -->

    <input type="text" #user value="admin" /><br />
    <input type="password" #pass value="admin" /><br />
    <!-- ‘#user’ and ‘#pass’ template Variable, same as document.getEBI() -->

    <!-- catch and pass the value as arguments in 'ckeck()' method -->
    <button
      (click)="check(user.value, pass.value)"
      class="waves-effect waves-light btn"
    >
      Login
    </button>
    <!-- for step 7 go to 'login.component.ts' -->
    <br />
    <span style="color: red;">{{ msg }}</span>
  `,
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
msg;
  ngOnInit(): void {}
  check(uname: string, p: string) {
    var output = this.authService.checkUserNameAndPassword(uname, p);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}
