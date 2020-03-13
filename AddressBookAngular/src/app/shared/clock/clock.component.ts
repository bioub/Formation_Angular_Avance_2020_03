import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/observable/interval'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ab-clock',
  templateUrl: './clock.component.html',
})
export class ClockComponent implements OnInit, OnDestroy {

  now$;
  // subscription;

  constructor() { }

  ngOnInit() {
    this.now$ = interval(1000).map(() => new Date); //.do(console.log);
    // this.subscription = interval(1000)
    //   .map(() => new Date)
    //   .subscribe({
    //     next: (now) => {
    //       console.log(this)
    //       this.now = now;
    //     },
    //     complete: () => {
    //       console.log('complete Clock')
    //     }
    //   })
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
