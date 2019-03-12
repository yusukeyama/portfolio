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
export class ProfileComponent implements OnInit, OnChanges {
  hero: Menu;

  constructor(
    private route: ActivatedRoute,
    private contentsService: ContentsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContents();
  }

  ngOnChanges(): void {
    this.getContents();
  }

  getContents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contentsService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
