import {Injectable} from '@angular/core';
import {Friend} from '../items/friend';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
import { Observable }     from 'rxjs/Rx';

let Friends = [
  new Friend(11, 'afedoro@no.fr', 'M. Nices', 'http://url.com' ),
  new Friend(12, 'afedoro@no.fr', 'Mr NiceRubberMan', 'http://url.com' ),
  new Friend(13, 'afedoro@no.fr', 'Mr. Nice', 'http://url.com' ),
  new Friend(14, 'afedoro@no.fr', 'Mme RubberManNice', 'http://url.com' ),
  new Friend(15, 'afedoro@no.fr', 'Mr. RubberMan', 'http://url.com' ),
];

let FriendsPromise = Promise.resolve(Friends);



@Injectable()
export class FriendsService {


    private heroesUrl = 'http://api.randomuser.me/?&results=5&nat=fr';

    //getFriends() { return FriendsPromise; }
 
    constructor(private http: Http) {  }
   

    getFriends (): Observable<Friend[]> {
      return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
      
    getFriend(id: number | string) {
        return FriendsPromise
        .then(Friends => Friends.filter(h => h.id === +id)[0]);
    }
  
  
  /**
   * Remap api answer with local objects
   */
  
   private extractData(res: Response): Friend[] {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    
    let body = res.json();
    console.log(body.results);
    
    var friends: Friend[] = [];   
    for(var key in body.results) {
        console.log('Type: ' + typeof key);
        console.log(key + ' => ' + body.results[key]);
        let oneperson = body.results[key];
        let name =  oneperson.name.title + " " + oneperson.name.first + " " + oneperson.name.last; 
        let friend =new Friend(oneperson.id.value, oneperson.email, name, oneperson.picture.thumbnail );
        friends.push(friend);   
    }
    return friends;
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
  
}
