import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.authService.signUp(this.user).subscribe((resp: any) => {
      console.log(resp);
      localStorage.setItem('token', resp.token);
      this.router.navigate(['/private-tasks']);
    }, err => {
      console.log(err);
    });
  }

}
