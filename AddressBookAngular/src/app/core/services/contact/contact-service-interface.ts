import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../../../shared/models/contact';
import { Subject } from 'rxjs/Subject';

export interface ContactServiceInterface {
  events: Subject<string>;
  getList$(): Observable<Contact[]>;
  create$(contact: Contact): Observable<Contact>;
  getById$(id: number): Observable<Contact>;
}
