import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Menu } from './menu';
import { HEROES } from './mock-contents';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Menu[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Menu> {
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of (HEROES.find(hero => hero.id === id));
  }
}
