import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { SpinnerModule } from './spinner.module';

@Injectable({
  providedIn: SpinnerModule
})
export class SpinnerService {
  private overlayRef: OverlayRef = null;
  private overlayPortal: ComponentPortal<SpinnerComponent>;

  constructor(private overlay: Overlay) {
    this.overlayRef = this.overlay.create();
    this.overlayPortal = new ComponentPortal(SpinnerComponent);
  }

  show() {
    if (this.overlayRef.hasAttached()) {
      this.hide();
    }
    this.overlayRef.attach(this.overlayPortal);
  }

  hide() {
    this.overlayRef.detach();
  }
}
