import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionnaireComponent, RegistrationFormComponent, ProfileFormComponent, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
