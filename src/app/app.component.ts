import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';

@Component({
  selector: 'rmd-root',
  standalone: true,
  imports: [RouterOutlet, ReminderListComponent, ReminderFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
