import {Component} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
//import {  } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable }     from 'rxjs/Rx';


import { LinksService } from './services/links.service';
import { Link } from './items/link';

@Component({
    selector: 'link-component',
    templateUrl: 'views/links.html',
    directives: [],
    providers: [LinksService],
})

export class LinksComponent implements OnActivate { 
    
    Links: Link[];
    private currSegment: RouteSegment;
    private selectedId: number;
    
     constructor(
        private service: LinksService,
        private router: Router) {
            
            this.service.getLinks().subscribe(links => 
                this.Links = Links);
         }
    
    isSelected(Link: Link) { return Link.id === this.selectedId; }
    
     routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        this.service.getLinks().subscribe(Links => this.Links = Links);
    }
    
   
    
    
    onSelect(Link: Link) {
    // Absolute link
    // this.router.navigate([`/crisis-center`, Link.id]);

    // Relative link
    this.router.navigate([`./${Link.id}`], this.currSegment);
  }
    
}