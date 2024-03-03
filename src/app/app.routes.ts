import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {TstComponent} from "./tst/tst.component";

export const routes: Routes = [
  {
  path: "about",
  component: AboutComponent
},
{
  path: "home",
  component: TstComponent
}
];
