import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MessageOptions, MessageType } from './message-model';
import { MessageComponent } from './message.component';
import { MessageModule } from './message.module';

@Injectable({
  providedIn: MessageModule
})
export class MessageService {
  private overlayRef: OverlayRef;
  private messageComponent: MessageComponent;
  private readonly offset = '1rem';
  private readonly options: MessageOptions = {
    type: MessageType.Info,
    closable: true,
    duration: 4000
  };

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .bottom(this.offset)
    });
  }

  private show(message: string, options?: Partial<MessageOptions>) {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    const portal = new ComponentPortal(MessageComponent);
    const componentRef = this.overlayRef.attach(portal);
    this.messageComponent = componentRef.instance;
    this.messageComponent.open(message, { ...this.options, ...options });
    this.messageComponent.unsubscribe$.subscribe(() => {
      this.overlayRef.detach();
    });
  }

  showInfo(message: string, options?: Partial<MessageOptions>) {
    this.show(message, { type: MessageType.Info, ...options });
  }

  showWarning(message: string, options?: Partial<MessageOptions>) {
    this.show(message, { type: MessageType.Warning, ...options });
  }

  showError(message: string, options?: Partial<MessageOptions>) {
    this.show(message, { type: MessageType.Error, ...options });
  }
}
