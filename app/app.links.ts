import {Component} from '@angular/core';
import { OnActivate, Router, RouteSegment, RouteTree } from '@angular/router';
//import {  } from 'ng2-bootstrap/ng2-bootstrap';
import { Observable }     from 'rxjs/Rx';


//import { LinksService } from './services/links.service';
import { Link } from './items/link';

@Component({
    selector: 'link-component',
    templateUrl: 'views/links.html',
    directives: [],
   // providers: [LinksService],
})

export class LinksComponent implements OnActivate { 
    
    links: Link[] = [];
    private currSegment: RouteSegment;
    private selectedId: number;
    
     constructor(
       // private service: LinksService,
        private router: Router) {
            
            
        let Links = [
            new Link(1,1,2, "Un lien bien sympa", null, null, null),
            new Link(2,1,2, "Un lien bien sympa 2", null, null, null),
            new Link(3,1,2, "Un lien bien sympa 3", null, null, null),
            new Link(4,1,2, "Un lien bien sympa 4", null, null, null),
        ];
            
            this.links = Links;      
            //this.service.getLinks().subscribe(links => 
             //   this.Links = Links);
             /*
             this.service.getLinks().then(
                    links => this.links = links);
             */
             //this.links = [];
         }
    
    isSelected(link: Link) { return link.id === this.selectedId; }
    
     routerOnActivate(curr: RouteSegment, prev: RouteSegment, currTree: RouteTree) {
        this.currSegment = curr;
        this.selectedId = +currTree.parent(curr).getParam('id');
        //this.service.getLinks().subscribe(Links => this.Links = Links);
       // this.service.getLinks().then(links => this.links = links);
         console.log("Links logs");
        console.log(this.links);
    }
    
   
    
    
    onSelect(link: Link) {
    // Absolute link
    // this.router.navigate([`/crisis-center`, Link.id]);

    // Relative link
    this.router.navigate([`./${link.id}`], this.currSegment);
  }
    
}