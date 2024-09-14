import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {

  addressForm = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  })
  
  registrationForm = new FormGroup({
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    department: new FormControl(''),
    password: new FormControl(''),
    profileImage: new FormControl(''),
    address: this.addressForm,
  });

 

  onSubmit(){
    console.log(this.registrationForm.value);
    this.registrationForm.reset();
    this.registrationForm.controls.department.setValue('sales')
  }
}
