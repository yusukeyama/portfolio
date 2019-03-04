import { HEROS } from '../mock-contents';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  heros = HEROS;

  hero: Menu = {
    id: 1,
    name: 'wind'
  }
}
