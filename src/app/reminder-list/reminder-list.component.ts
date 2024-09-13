import { Component, effect, inject } from '@angular/core';
import { ReminderComponent } from '../reminder/reminder.component';
import { Reminder } from '../reminder';
import { NgFor } from '@angular/common';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'rmd-reminder-list',
  standalone: true,
  imports: [ReminderComponent, NgFor],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css',
  //providers: [BackendService] // Add the BackendService to the providers array
})
export class ReminderListComponent {

  service = inject(BackendService)
  reminders: Reminder[] = [];

  constructor() {
    this.service.getReminders().subscribe((reminders) => {
      this.reminders = reminders;
    });

    effect(() => {
      console.log('ReminderListComponent effect');
      this.reminders = this.service.reminderSignal();
    });
  }
}
