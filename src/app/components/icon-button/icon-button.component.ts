import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() icon: string;
  @Input() link: string;

  openLink(): void {
    window.open(this.link, '_blank');
  }
}
