import { Component, Input } from '@angular/core';
import { Reminder } from '../reminder';

@Component({
  selector: 'rmd-reminder',
  standalone: true,
  imports: [],
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css'
})
export class ReminderComponent {

  @Input() reminder: Reminder = new Reminder(0, '', false);
}
