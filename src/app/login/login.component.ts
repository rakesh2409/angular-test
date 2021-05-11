import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userName: string = "Admin";
  password: string = "test123";

  constructor(private formBuilder: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // submit  
  submit(value) {
    if (!!value && (value.username !== this.userName || value.password !== this.password)) {
      this.showError();
    } else {
      // set logged user to localStorage
      localStorage.setItem('username', value.username);
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 800);
    }
  }

  // showErrow toast
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Username or password is incorrect' });
  }

  // showSuccess toast
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login successfully' });
  }

}
