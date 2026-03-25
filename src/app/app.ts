import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //console.log('App component initialized');
  //console.log("hello  test");
  protected readonly title = signal('ai-review-demo');
}
