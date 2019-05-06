import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [MessageComponent],
  entryComponents: [MessageComponent]
})
export class MessageModule {}
