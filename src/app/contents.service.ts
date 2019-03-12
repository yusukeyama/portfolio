import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Menu } from './menu';
import { MENUS } from './mock-contents';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private messageService: MessageService) { }

  getMenus(): Observable<Menu[]> {
    this.messageService.add('HeroService: fetched menus');
    return of (MENUS);
  }

  getMenu(id: number): Observable<Menu> {
    this.messageService.add('HeroService: fetched menu id=${id}');
    return of (MENUS.find(menu => menu.id === id));
  }
}
