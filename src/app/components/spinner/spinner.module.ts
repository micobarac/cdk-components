import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  entryComponents: [SpinnerComponent]
})
export class SpinnerModule {}
