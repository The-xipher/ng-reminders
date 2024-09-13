import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'rmd-root',
  standalone: true,
  imports: [RouterOutlet, ReminderListComponent, ReminderFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    // create a function that returns a value every second as an Observable
    const secondsCounter = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        observer.next(`Hello from Obervavle ${i++}`);
        if (i === 3) {
          observer.error('Something went wrong');
        }
        if (i === 5) {
          observer.complete();
        }
      }, 1);
    });

    // subscribe to the Observable and log the value to the console
    secondsCounter.subscribe({
      next: (value) => console.log(value),
      error: (error) => console.error(`ERROR - ${error}` ),
      complete: () => console.log('Finished'),
    });

    
  }
}
