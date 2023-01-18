import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;
  @Input() link: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.img = '';
    this.link = '';
  }

  open(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }

  isVideo(): boolean {
    return this.link !== undefined && this.link.includes('youtube');
  }
}

@Pipe({ name: 'sanitize' })
export class SanitizePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
