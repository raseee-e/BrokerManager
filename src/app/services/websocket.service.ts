import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private ws?: WebSocket;
  private subject = new Subject<any>();

  connect(): Observable<any> {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      this.ws = new WebSocket('ws://localhost:3000');
      this.ws.onmessage = (event) => this.subject.next(JSON.parse(event.data));
      this.ws.onclose = () => this.subject.complete();
      this.ws.onerror = (err) => this.subject.error(err);
    }
    return this.subject.asObservable();
  }

  send(data: any) {
    this.ws?.send(JSON.stringify(data));
  }

  close() {
    this.ws?.close();
  }
}