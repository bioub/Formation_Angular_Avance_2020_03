import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  declarations: [
    ClockComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ClockComponent,
  ]
})
export class SharedModule { }
