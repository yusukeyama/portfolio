import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { ContentsService } from '../contents.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menus: Menu[] = [];

  constructor(private contentsService: ContentsService) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus(): void {
    this.contentsService.getMenus()
      .subscribe(menus => this.menus = menus.slice(0, 6));
  }

  onClick(id: number): void {
    console.log('kiteru');
    for (let i = 1; i < 5; i++) {
        document.getElementById('select' + i).classList.remove('click');
    }
    if (id != 6) {
      let selectElement = document.getElementById('select' + id);
      selectElement.classList.add('click');
    }
  }
}
