import { Injectable } from '@angular/core';

import { Menu } from './menu';
import { HEROS } from './mock-contents';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor() { }

  getHeroes(): Menu[] {
    return HEROS;
  }
}
