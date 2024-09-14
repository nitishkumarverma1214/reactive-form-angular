import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports:[ReactiveFormsModule],
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {

  constructor(private fb: FormBuilder) {}

  educationForm = this.fb.group({
    educationSections: this.fb.array([])
  });

  get educationSections(): FormArray {
    return this.educationForm.get('educationSections') as FormArray;
  }

  // Add a new education section
  addEducation(): void {
    const educationGroup = this.fb.group({
      name: ['', Validators.required],  // Education name field
      score: ['', [Validators.required]]  // Score field (numbers only)
    });
    this.educationSections.push(educationGroup);

  }

  // Remove an education section
  removeEducation(index: number): void {
    this.educationSections.removeAt(index);
  }

  // Submit form and log form data to the console
  submitForm(): void {
    if (this.educationForm.valid) {
      console.log(this.educationForm.value);
    } else {
      console.log("Form is invalid");
    }
  }

}
