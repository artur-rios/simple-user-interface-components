import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() public backgroundColor = '#fe0000';
  @Input() public buttonType = 'button';
  @Input() public fontSize = '15px';
  @Input() public text: undefined | string;
  @Input() public textColor = '#fff';
  @Input() public horPad = '20px';
  @Input() public verPad = '10px';

  @Output()
  public click: EventEmitter<string> = new EventEmitter<string>();

  public hover = false;

  public handleClick(): void {
    this.click.emit(this.text);
  }

  public getStyle() {
    if (this.hover) {
      return `
      background-color: ${this.backgroundColor};
      color: ${this.textColor};
      font-size: ${this.fontSize};
      padding: ${this.verPad} ${this.horPad};
    `;
    } else {
      return `
        background-color: ${this.textColor};
        border: ${this.backgroundColor};
        box-shadow: 5px 5px 0px ${this.backgroundColor}
        color: ${this.backgroundColor};
        font-size: ${this.fontSize};
        padding: ${this.verPad} ${this.horPad};
      `;
    }
  }
}
