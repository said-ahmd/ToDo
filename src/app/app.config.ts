 import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
 import {FirstService} from "./services/first.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),FirstService]
};
