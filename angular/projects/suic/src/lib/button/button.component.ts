import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'suic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class SuicButtonComponent {
  @Input() public backgroundColor = '#fff';
  @Input() public buttonType = 'button';
  @Input() public fontSize = '15px';
  @Input() public text: undefined | string;
  @Input() public textColor = '#000';
  @Input() public horPad = '20px';
  @Input() public verPad = '10px';

  @Output()
  public sClick: EventEmitter<string> = new EventEmitter<string>();

  public hover = false;

  public handleClick(): void {
    this.sClick.emit(this.text);
  }

  public getStyle() {
    if (!this.hover) {
      return {
        'background-color': this.backgroundColor,
        border: `2px solid ${this.textColor}`,
        'box-shadow': `5px 5px 0px ${this.textColor}`,
        color: this.textColor,
        'font-size': this.fontSize,
        padding: `${this.verPad} ${this.horPad}`,
      };
    } else {
      return {
        'background-color': this.textColor,
        border: `2px solid ${this.backgroundColor}`,
        'box-shadow': `5px 5px 0px ${this.backgroundColor}`,
        color: this.backgroundColor,
        'font-size': this.fontSize,
        padding: `${this.verPad} ${this.horPad}`,
      };
    }
  }
}
