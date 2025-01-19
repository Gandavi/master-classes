import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterClassCardComponent } from "./common-ui/master-class-card/master-class-card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MasterClassCardComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'master-classes';
}
