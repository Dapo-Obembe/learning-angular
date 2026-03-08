import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Comments } from './comments/comments';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = signal("Learning Angular");
  name = signal("Dapo Obembe");

  changeTitle() {
    this.title.set("Mastering Angular 21");
    this.alertMe() // To call a Fxn inside another, use the this keyword.
  }

  alertMe() {
    alert("Title changed!");
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
