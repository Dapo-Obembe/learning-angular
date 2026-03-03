import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Profile],
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
}
