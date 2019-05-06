import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [CommonModule, PortalModule],
  declarations: [LoaderComponent],
  entryComponents: [LoaderComponent]
})
export class LoaderModule {}
