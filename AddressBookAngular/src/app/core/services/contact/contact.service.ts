import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

import { Contact } from '../../../shared/models/contact';
import { ContactServiceInterface } from './contact-service-interface';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ContactService implements ContactServiceInterface {
  public events = new Subject<string>();

  public contactsCache$: ReplaySubject<Contact[]>;

  constructor(
    private http: HttpClient,
  ) { }

  public getList$(): Observable<Contact[]> {
    if (this.contactsCache$) {
      return this.contactsCache$;
    }

    this.contactsCache$ = new ReplaySubject<Contact[]>(1);

    this.http.get<Contact[]>(
      `${environment.apiServer}/contacts`,
    //  ).subscribe((data)=> this.contactsCache$.next(data)); // appell
    ).subscribe(this.contactsCache$); // appelle this.contactsCache$.next()

    return this.contactsCache$;
  }

  public create$(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      `${environment.apiServer}/contacts`,
      contact,
    );
  }

  public getById$(id: number): Observable<Contact> {
    return this.http.get<Contact>(
      `${environment.apiServer}/contacts/${id}`,
    );
  }
}
