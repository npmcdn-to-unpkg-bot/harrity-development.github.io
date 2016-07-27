import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {AppComponent} from './app/app.component';

enableProdMode();

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]);