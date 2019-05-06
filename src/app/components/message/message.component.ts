import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MessageOptions } from './message-model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  animations: [
    trigger('messageAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(100%)',
          opacity: 0
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      ),
      transition('* <=> void', animate(`400ms cubic-bezier(0.4, 0, 0.1, 1)`))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class MessageComponent implements OnDestroy {
  private timeoutId: any;
  message: string;
  options: MessageOptions;
  animationState: '*' | 'void' = 'void';
  unsubscribe$ = new ReplaySubject<void>(1);

  open(message: string, options: MessageOptions): void {
    this.message = message;
    this.options = options;
    this.animationState = '*';
  }

  animateClose(): void {
    this.animationState = 'void';
    clearTimeout(this.timeoutId);
  }

  animationDone() {
    if (this.animationState === 'void') {
      this.unsubscribe$.next();
    } else if (this.animationState === '*') {
      if (this.options) {
        this.dismissAfter(this.options.duration);
      }
    }
  }

  private dismissAfter(duration: number): void {
    if (duration && duration > 0) {
      this.timeoutId = setTimeout(() => this.animateClose(), duration);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
