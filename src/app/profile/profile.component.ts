import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Menu } from '../menu';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hero: Menu;

  constructor(
    private route: ActivatedRoute,
    private contentsService: ContentsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramsMap => {
      this.getContents();
    })
  }

  getContents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentsService.getMenu(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
