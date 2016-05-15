import {Injectable} from '@angular/core';
import {Friend} from '../items/friend';

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
  getFriends() { return FriendsPromise; }

  getFriend(id: number | string) {
    return FriendsPromise
      .then(Friends => Friends.filter(h => h.id === +id)[0]);
  }
}
