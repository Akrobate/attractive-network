import {Component} from '@angular/core';
import {FriendsComponent} from './app.friends';
import {LinksComponent} from './app.links';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

//import {  } from 'ng2-bootstrap/ng2-bootstrap';
// 
// 
//  


@Component({
    selector: 'dashboard',
    templateUrl: 'views/dashboard.html',
    directives: [LinksComponent, FriendsComponent],
})

export class DashboardComponent { }
