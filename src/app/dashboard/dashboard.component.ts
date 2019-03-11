import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Menu[] = [];

  constructor(private contentsService: ContentsService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.contentsService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 6));
  }
}
