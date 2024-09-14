import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {

  constructor(private formBuilder: FormBuilder){}
  profileForm: FormGroup = this.formBuilder.group({
    firstName: ['' ,[Validators.required, Validators.minLength(3)]],
    lastName: [''],
    address: this.formBuilder.group({
      streets: [''],
      city: [''],
    }),
    differentPermanentAddress: [false,],
    permanentAddress: this.formBuilder.group({
      streets: [''],
      city: [''],
    }),
  })

  onSubmit(){
    console.log(this.profileForm.value)
  }

  checkboxEvent(event: any){
    if(event && event.target.checked){
      this.profileForm.controls['lastName'].addValidators([Validators.required])
    }else if(event && !event.target.checked){
      this.profileForm.controls['lastName'].removeValidators([Validators.required])
    }

    this.profileForm.controls['lastName'].updateValueAndValidity();
  }
}
