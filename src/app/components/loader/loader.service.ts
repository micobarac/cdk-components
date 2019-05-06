import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { LoaderComponent } from './loader.component';
import { LoaderModule } from './loader.module';

@Injectable({
  providedIn: LoaderModule
})
export class LoaderService implements OnDestroy {
  private portal: ComponentPortal<LoaderComponent>;
  private overlayRef: OverlayRef;
  private componentRef: ComponentRef<LoaderComponent>;
  private subscription: Subscription;

  constructor(private overlay: Overlay) {
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const config = new OverlayConfig({ positionStrategy: strategy, hasBackdrop: true });

    this.overlayRef = this.overlay.create(config);
    this.overlayRef
      .backdropClick()
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.hide());

    this.portal = new ComponentPortal(LoaderComponent);
  }

  show() {
    this.componentRef = this.overlayRef.attach(this.portal);
    this.subscription = this.componentRef.instance.onEscape.pipe(take(1)).subscribe(() => {
      this.hide();
    });
  }

  hide() {
    this.overlayRef.detach();
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }
}
