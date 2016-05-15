import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Rx';
import {Link} from '../items/link';


  let links = [
        new Link(1,1,2, "Un lien bien sympa", null, null, null),
        new Link(2,1,2, "Un lien bien sympa 2", null, null, null),
        new Link(3,1,2, "Un lien bien sympa 3", null, null, null),
        new Link(4,1,2, "Un lien bien sympa 4", null, null, null),
    ];



/*
export class Link {
  constructor(public id: number, public name: string) { }
}
*/

//let Links: Link[] = [];
//let link = new(id,from_user_id,to_user_id,value, created, viewed, archived);


let LinksPromise = Promise.resolve(links);

@Injectable()
export class LinksService {
  // old link
  getLinks() { return LinksPromise; }
/*
  getLink(id: number | string) {
    return LinksPromise
      .then(Links => Links.filter(h => h.id === +id)[0]);
  }
  */
  
  /*
  getLinks ():Link[] { 
 
    var links = [
        new Link(1,1,2, "Un lien bien sympa", null, null, null),
        new Link(2,1,2, "Un lien bien sympa 2", null, null, null),
        new Link(3,1,2, "Un lien bien sympa 3", null, null, null),
        new Link(4,1,2, "Un lien bien sympa 4", null, null, null),
    ];
    
    return links;
        
  }
  */
  
}
