import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';
import { HeapProfiler } from 'inspector';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() hero: Menu;

  constructor() { }

  ngOnInit() {
  }

}
