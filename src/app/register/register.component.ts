import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

// import { HttpService } from '../http.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm!: FormGroup;
  // registerForm!: FormGroup;
  submitted = false;

  // constructor(private httpservice: HttpService, private formBuilder: FormBuilder, private router: Router) { }
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    // this.angForm = this.fb.group({
    //   email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
    //   password: ['', Validators.required],
    //   name: ['', Validators.required],
    //   mobile: ['', Validators.required]
    // });
  }

  ngOnInit() {
    // Add User form validations
      this.angForm = this.fb.group({
      login: ['', [Validators.required]],

      password: ['', [Validators.required]],

      firstname: ['', [Validators.required]]
      });
  }

  postdata(angForm1: any)  {
    this.submitted = true;
    // проверка на заполнение всех полей для регистрации
    if (this.angForm.invalid) {
          return;
    }
    var myFormData = new FormData();

    myFormData.append('myLogin', this.angForm.value.login);
    myFormData.append('myPassword', this.angForm.value.password);
    myFormData.append('myUsername', this.angForm.value.firstname);

    this.dataService.adduser(myFormData); //calling add user service
    this.router.navigate(['login']);

    // this.dataService.userregistration(angForm1.value.name, angForm1.value.email, angForm1.value.password)
    // .pipe(first())
    // .subscribe(
    // data => {
    //   this.router.navigate(['login']);
    // },
    // error => { });
  }

  get login() {
    return this.angForm.get('login');
  }

  get password() {
    return this.angForm.get('password');
  }

  get firstname() {
    return this.angForm.get('firstname');
  }

  //Add user form actions
  // get f() { return this.registerForm.controls; }

  get f() { return this.angForm.controls; }

  // onSubmit() {
  //
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //       return;
  //   }
  //   //True if all the fields are filled
  //   if(this.submitted)
  //   {
  //
  //     // Initialize Params Object
       // var myFormData = new FormData();
  //
  //    // Begin assigning parameters
  //
        // myFormData.append('myLogin', this.registerForm.value.login);
        // myFormData.append('myPassword', this.registerForm.value.password);
        // myFormData.append('myUsername', this.registerForm.value.firstname);
  //
  //       this.httpservice.adduser(myFormData); //calling add user service
  //       // this.router.navigate([`/users`]); //after form submit page will redirect to users page
  //   }
  //
  // }
    // ngOnInit() {
    //   //Add User form validations
    //   this.registerForm = this.formBuilder.group({
    //   login: ['', [Validators.required]],
    //
    //   password: ['', [Validators.required]],
    //
    //   firstname: ['', [Validators.required]]
    //   });
    // }

}
