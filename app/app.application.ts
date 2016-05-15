import {Component, OnInit} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './app.dashboard';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

//import { BootstrapDirectives } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    templateUrl: 'views/application.html',
    directives: [AppComponent, ROUTER_DIRECTIVES]
})

@Routes([
  {path: '/',  component: AppComponent},
  {path: '/dashboard',  component: DashboardComponent},
  {path: '/home', component: AppComponent},
])
export class Application implements OnInit { 
  
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/']);
  }
}