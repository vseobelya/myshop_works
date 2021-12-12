import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm!: FormGroup;
  submitted = false;

    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
      // this.angForm = this.fb.group({
      //   email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      //   password: ['', Validators.required]
      // });
    }

    ngOnInit() {
      // Add User form validations
        this.angForm = this.fb.group({
        login: ['', [Validators.required]],

        password: ['', [Validators.required]]
        });
    }

    get f() {
      return this.angForm.controls;
    }

    postdata(angForm1: any){
      this.submitted = true;
      // проверка на заполнение всех полей для регистрации
      if (this.angForm.invalid) {
            return;
      }

      // var myFormData = new FormData();
      //
      // myFormData.append('myLogin', this.angForm.value.login);
      // myFormData.append('myPassword', this.angForm.value.password);

      this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
        .pipe(first())
        .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          alert("Неправильно введены логин или пароль")
        });


      // this.dataService.userlogin(myFormData)
      // // .pipe(first())
      // .subscribe(
      // data => {
      //   const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/cart';
      //   this.router.navigate([redirect]);
      // },
      // error => {
      //   alert("Неправильно введены логин или пароль")
      // });
    }
    get login() {
      return this.angForm.get('login');
    }
    get password() {
      return this.angForm.get('password');
    }
}
