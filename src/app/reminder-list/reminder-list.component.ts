import { Component } from '@angular/core';
import { ReminderComponent } from '../reminder/reminder.component';
import { Reminder } from '../reminder';
import { NgFor } from '@angular/common';

@Component({
  selector: 'rmd-reminder-list',
  standalone: true,
  imports: [ReminderComponent, NgFor],
  templateUrl: './reminder-list.component.html',
  styleUrl: './reminder-list.component.css'
})
export class ReminderListComponent {

  reminders: Reminder[] = [
    new Reminder(1, 'Buy milk', false),
    new Reminder(2, 'Clean the house', false),
    new Reminder(3, 'Go to the gym', false)
  ]
}
