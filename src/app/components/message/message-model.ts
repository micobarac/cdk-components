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
