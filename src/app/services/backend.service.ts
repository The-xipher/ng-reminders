import { inject, Injectable, signal } from '@angular/core';
import { Reminder } from '../reminder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  idCounter: number = 1;
  reminders: Reminder[] = [];
  reminderSignal = signal<Reminder[]>([]);
  http: HttpClient = inject(HttpClient);
  url: string = 'http://localhost:3004/reminders';

  // constructor(private http:HttpClient) {}

  addReminder(reminder: Reminder): void {
    // Add the reminder to the array
    // this.reminders.push(reminder);
    reminder.id = this.idCounter++;
    this.http
      .post<Reminder>(this.url, reminder, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 201) {
          let reminders = this.reminderSignal()
          reminders.push(reminder);
          this.reminderSignal.set(reminders);
        }
      });
  }

  deleteReminder(reminderId: number): void {
    // Find the reminder in the array and remove it
    this.reminders = this.reminders.filter(
      (reminder) => reminder.id !== reminderId
    );
  }

  updateReminder(reminder: Reminder): void {
    // Update the reminder in the database
  }

  getRemindersArr(): Reminder[] {
    return this.reminders;
  }

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.url);
  }
}
