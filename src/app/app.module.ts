import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoaderModule } from './components/loader/loader.module';
import { MessageModule } from './components/message/message.module';
import { SpinnerModule } from './components/spinner/spinner.module';

@NgModule({
  imports: [BrowserAnimationsModule, MessageModule, LoaderModule, SpinnerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
