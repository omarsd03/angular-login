import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:any = {};

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user).subscribe((resp: any) => {
      console.log(resp);
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/private-tasks']);
    }, err => {
      console.log(err);
    });
  }

}
