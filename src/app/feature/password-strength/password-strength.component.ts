import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.pattern(/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]),
  });

  get form() { return this.registerForm.controls; }

  

  submitted = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {

  }

  onReset() {
    this.registerForm.reset();
  }
}


