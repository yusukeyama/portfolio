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

  menus: Menu[];

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.contentsService.getMenus()
      .subscribe(menus => this.menus = menus);
  }
}
