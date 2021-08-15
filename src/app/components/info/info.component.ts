import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;
  @Input() link: string;

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
