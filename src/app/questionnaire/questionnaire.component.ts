import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {

  name = new FormControl('')

  updateName(){
    this.name.setValue('Nitish')
  }
}
