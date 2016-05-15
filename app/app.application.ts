import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

//import { BootstrapDirectives } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'my-app',
    templateUrl: 'views/application.html',
    directives: [AppComponent]
})

export class Application { }
