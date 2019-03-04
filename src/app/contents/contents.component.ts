import { HEROS } from '../mock-contents';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'; 

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})

export class ContentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  heroes = HEROS;
  selectedHero: Menu;

  hero: Menu = {
    id: 1,
    name: 'wind'
  }

  onSelect(hero: Menu): void {
    this.selectedHero = hero;
  }
}
