import { ContentsService } from '../contents.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu'; 

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})

export class ContentsComponent implements OnInit {
  constructor(private contentsService: ContentsService) { }

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Menu[];
  selectedHero: Menu;

  hero: Menu = {
    id: 1,
    name: 'wind'
  }

  onSelect(hero: Menu): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.contentsService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
