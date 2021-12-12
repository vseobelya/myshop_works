import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private httpservice: HttpService, private formBuilder: FormBuilder, private router: Router) { }

  //Add user form actions
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {

      // Initialize Params Object
       var myFormData = new FormData();

     // Begin assigning parameters

        myFormData.append('myLogin', this.registerForm.value.login);
        myFormData.append('myPassword', this.registerForm.value.password);
        myFormData.append('myUsername', this.registerForm.value.firstname);

        this.httpservice.adduser(myFormData); //calling add user service
        // this.router.navigate([`/users`]); //after form submit page will redirect to users page
    }

  }
    ngOnInit() {
      //Add User form validations
      this.registerForm = this.formBuilder.group({
      login: ['', [Validators.required]],

      password: ['', [Validators.required]],

      firstname: ['', [Validators.required]]
      });
    }

}
