import { Component, Input } from '@angular/core';

@Component({
  selector: 'suic-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() public items: Array<Item> = [];
  @Input() public title: undefined | string;

  public navButtonClicked = false;
}

export interface Item {
  name: string;
  url: string;
}
