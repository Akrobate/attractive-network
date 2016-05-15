import {Injectable} from '@angular/core';

export class Link {
  constructor(public id: number, public name: string) { }
}

let Links = [
  new Link(11, 'Mr. Nice'),
  new Link(12, 'Narco'),
  new Link(13, 'Bombasto'),
  new Link(14, 'Celeritas'),
  new Link(15, 'Magneta'),
  new Link(16, 'RubberMan')
];

let LinksPromise = Promise.resolve(Links);

@Injectable()
export class LinkService {
  getLinks() { return LinksPromise; }

  getLink(id: number | string) {
    return LinksPromise
      .then(Links => Links.filter(h => h.id === +id)[0]);
  }
}
