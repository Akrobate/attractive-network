import {Component} from '@angular/core';
import {FriendsComponent} from './app.friends';
//import {  } from 'ng2-bootstrap/ng2-bootstrap';



@Component({
    selector: 'dashboard',
    templateUrl: 'views/dashboard.html',
    directives: [FriendsComponent]
})

export class DashboardComponent { }
