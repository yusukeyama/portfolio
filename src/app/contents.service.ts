import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { MessageService } from './message.service';

import { Menu, Content } from './menu';
import { MENUS, PROFILE, LANG, TOOLS, WORKS, CONTACTS } from './mock-contents';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private messageService: MessageService) { }

  getMenus(): Observable<Menu[]> {
    this.messageService.add('ContensService: fetched menus');
    return of (MENUS);
  }

  getContents(id: number): Observable<Content[]> {
    switch (id) {
      case 1:
        return of (LANG);
        break;
      case 2:
        return of (TOOLS);
        break;
      case 3:
        return of (WORKS);
        break;
      case 4:
        return of (CONTACTS);
        break;
    }
    //return of (MENUS.find(menu => menu.id === id));
  }
}
