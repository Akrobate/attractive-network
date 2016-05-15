import {Component} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
//import {  } from 'ng2-bootstrap/ng2-bootstrap';

import { FriendsService } from './services/friends.service';
import { Friend } from './items/friend';

@Component({
    selector: 'friend-component',
    templateUrl: 'views/friends.html',
    directives: []
})

export class FriendsComponent implements OnActivate { 
    
    crises: Friend[];
    private currSegment: RouteSegment;
    private selectedId: number;
    
     constructor(
        private service: FriendsService,
        private router: Router) { }
    
    isSelected(friend: Friend) { return friend.id === this.selectedId; }
    
     routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getFriends().then(crises => this.crises = crises);
    }
    
    onSelect(friend: Friend) {
    // Absolute link
    // this.router.navigate([`/crisis-center`, friend.id]);

    // Relative link
    this.router.navigate([`./${friend.id}`], this.currSegment);
  }
    
}