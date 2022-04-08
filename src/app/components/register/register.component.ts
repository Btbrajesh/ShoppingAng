import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validate(password: any, confirmPassword: any) {
    if (password && confirmPassword &&
      password !== confirmPassword) {
      return true;
    }
    return false;
  }

  isPasswordMatch: boolean = false;
  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
  }
  
  saveUser() {
    this.isPasswordMatch = this.validate(this.userForm.get('password')?.value,this.userForm.get('confirmPassword')?.value);

    if (!this.userForm.invalid && !this.isPasswordMatch) {
      this.registerService.register(this.userForm.value).subscribe((registered: any) => {
        if (registered.isSuccess) {
        }
      })
    } else {
      this.userForm.markAllAsTouched();
    }

  }

  

}
