import { Component, EventEmitter, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
  onEscape = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(_: KeyboardEvent) {
    this.onEscape.emit();
  }
}
