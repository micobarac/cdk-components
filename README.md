# CDK components

This project serves as a demo on how to use the `@angular/cdk` to create a custom, opinionated cdk feature that can be used to display information to the user.

## Spinner

`Spinner` is an animated component which uses a _CDK overlay elements_ to display spinner, useful for showing the execution state of a potential asynchronous process. Spinner can be used _inline_, as a html element, to act as an Angular preloading spinner, or can be invoked _on demand_, as an Angular service, when required.

### Inline

```html
<app-root>
  <div class="spinner-container">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</app-root>
```

```scss
@import '~app/components/spinner/spinner.component';

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #247fbc;
}

* {
  font-family: 'Quicksand', sans-serif;
}
```

### Service

To use loader component, inject **SpinnerService** in a component constructor.

```typescript
constructor(
  private spinner: SpinnerService
) {}
```

The service exposes the following events:

### Events

- `show()`: show overlay spinner component
- `hide()`: hide overlay spinner component

### Customization

CSS animations can be found here:

[http://tobiasahlin.com/spinkit](http://tobiasahlin.com/spinkit)

[https://loading.io/css](https://loading.io/css)

[https://projects.lukehaas.me/css-loaders](https://projects.lukehaas.me/css-loaders)

### Example

```typescript
showSpinner() {
  this.spinner.show();
  setTimeout(() => this.spinner.hide(), 2000);
}
```

## Loader

`Loader` is an animated non-CDK component which uses a pure _CSS overlay elements_ to display loader, useful for showing the execution state of a potential asynchronous process. It's added here as an alternative to a spinner component.

### Service

To use loader component, inject **LoaderService** in a component constructor.

```typescript
constructor(
  private loader: LoaderService
) {}
```

The service exposes the following events:

### Events

- `show()`: show loader component
- `hide()`: hide loader component

### Example

```typescript
showLoader() {
  this.loader.show();
  setTimeout(() => this.loader.hide(), 2000);
}
```

## Message

`Message` is a component which uses a _CDK overlay elements_ to show closable status messages as a result of some executed processes.

### Service

To use message component, inject **MessageService** in a component constructor.

```typescript
constructor(
  private message: MessageService
) {}
```

The service exposes the following events:

### Events

- `showInfo(message: string, options?: Partial<MessageOptions>)`: show message component with an info message
- `showWarning(message: string, options?: Partial<MessageOptions>)`: show message component with a warning message
- `showError(message: string, options?: Partial<MessageOptions>)`: show message component with an error message

### Options

```typescript
export enum MessageType {
  Info = 'info',
  Warning = 'warning',
  Error = 'error'
}

export interface MessageOptions {
  type: MessageType;
  closable: boolean;
  duration: number;
}
```

- `type` - message type
- `closable` - show / hide close button
- `duration` - message duration in milliseconds

Default values:

```typescript
private readonly options: MessageOptions = {
  type: MessageType.Info,
  closable: true,
  duration: 4000
};
```

### Message types

#### Info

This is as an information message.

##### Example

```typescript
showInfo(): void {
  this.message.showInfo(`I'm an info message.`);
}
```

#### Warning

This is a warning message.

##### Example

```typescript
showWarning(): void {
  this.message.showWarning('Something is fishy here :(', {
    closable: false
  });
}
```

#### Error

This is an error message.

```typescript
showError(): void {
  this.message.showError(`There's something wrong!`);
}
```

## Example combined

```html
<div class="button-container">
  <button (click)="showSpinner()">Spinner</button>
  <button (click)="showLoader()">Loader</button>
  <button (click)="showInfo()">Message Info</button>
  <button (click)="showWarning()">Message Warning</button>
  <button (click)="showError()">Message Error</button>
</div>
```
