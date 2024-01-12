import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';

  //Creating data for share.
  UserName: string = "Alfredo";
  userData = {
    email: "AlfredoDias321@gamil.com",
    role: "Admin"
  }
}
