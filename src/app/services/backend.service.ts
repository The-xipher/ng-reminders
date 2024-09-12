import { Injectable } from '@angular/core';
import { Reminder } from '../reminder';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  idCounter: number = 4;

  reminders: Reminder[] = [
    new Reminder(1, 'Buy groceries', false),
    new Reminder(2, 'Call mom', false),
    new Reminder(3, 'Do laundry', false),
  ]
  
  addReminder(reminder: Reminder): void {
    // Add the reminder to the array
    reminder.id = this.idCounter++;
    this.reminders.push(reminder);
    console.log(this.reminders);
  }

  deleteReminder(reminderId: number): void {
    // Find the reminder in the array and remove it
    this.reminders = this.reminders.filter(reminder => reminder.id !== reminderId);
  }

  updateReminder(reminder: Reminder): void {
    // Update the reminder in the database
  }

  getRemindersArr(): Reminder[] {
    return this.reminders;
  }
}
