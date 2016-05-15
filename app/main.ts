import {bootstrap}    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';

import {AppComponent} from './app.component';
import {Application} from './app.application';
import {enableProdMode} from '@angular/core';
enableProdMode();

bootstrap(Application, [ROUTER_PROVIDERS]);
