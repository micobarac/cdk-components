import { Component } from '@angular/core';
import { MessageService } from './components/message/message.service';
import { LoaderService } from './components/loader/loader.service';
import { SpinnerService } from './components/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loader: LoaderService, private spinner: SpinnerService, private message: MessageService) {}

  showLoader() {
    this.loader.show();
    setTimeout(() => this.loader.hide(), 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => this.spinner.hide(), 2000);
  }

  showInfo(): void {
    this.message.showInfo(`I'm an info message.`);
  }

  showWarning(): void {
    this.message.showWarning('Something is fishy here :(', {
      closable: false
    });
  }

  showError(): void {
    this.message.showError(`There's something wrong!`);
  }
}
