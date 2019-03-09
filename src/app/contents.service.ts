import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from './menu';
import { HEROS } from './mock-contents';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor() { }

  getHeroes(): Observable<Menu[]> {
    return of (HEROS);
  }
}
