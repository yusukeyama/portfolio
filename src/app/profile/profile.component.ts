import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Content } from '../menu';
import { MENUS } from '../mock-contents';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContentsService } from '../contents.service';
import { listAnimation } from '../animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [listAnimation]
})
export class ProfileComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<boolean>();
  private component_state: boolean;
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
      .subscribe(content => {
        this.contents = content;
        this.onChanged();
      });
  }

  goBack(): void {
    this.location.back();
  }

  onChanged(): void{
    // this.component_state = !this.component_state;
    // this.changeComponent.emit(this.component_state);
  }
}
