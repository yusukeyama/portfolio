import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Content } from '../menu';
import { MENUS } from '../mock-contents';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  contents: Content[];
  title: string;

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
    this.title = MENUS.find(menu => menu.id === id).name;
    this.contentsService.getContents(id)
      .subscribe(content => this.contents = content);
  }

  goBack(): void {
    this.location.back();
  }
}
