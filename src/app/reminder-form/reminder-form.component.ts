import { Component, inject } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Reminder } from '../reminder';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'rmd-reminder-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './reminder-form.component.html',
  styleUrl: './reminder-form.component.css',
})
export class ReminderFormComponent {

  service = inject(BackendService);
  reminderText: string = '';
  reminderCreated: boolean = false;

  addReminder(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.reminderText) {
      let reminder = new Reminder(0, this.reminderText, false);
      let response = this.service.addReminder(reminder);
      this.reminderText = '';
    }
  }
}
