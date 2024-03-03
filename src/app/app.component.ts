import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TstComponent} from "./tst/tst.component";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TstComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'said try to master angular';
}
