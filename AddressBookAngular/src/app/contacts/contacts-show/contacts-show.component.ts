import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ContactService } from './../../core/services/contact/contact.service';
import { Contact } from './../../shared/models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss']
})
export class ContactsShowComponent implements OnInit {
  // public contact: Contact;
  public contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) {
    console.log('constructor show')
  }

  ngOnInit() {
    this.contact$ = this.route.params
      .map(params => Number(params.id))
      .switchMap((id: number) => this.contactService.getById$(id))
      // .subscribe({
      //   next: (val) => {
      //     console.log('next show', val);
      //     this.contact = val;

      //   },
      //   error: (err) => {
      //     console.log('error show', err);
      //   },
      //   complete: () => {
      //     console.log('complete show');
      //   }
      // });

    // ------1-----2----------3---------------......
    // ---------{id:1}|----------{id:2}|
    // -------------------
    // switchMap()
    // ---------{id:1}-----------------------------
  }

}
