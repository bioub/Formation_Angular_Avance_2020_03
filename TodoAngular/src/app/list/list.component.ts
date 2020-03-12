import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListComponent implements DoCheck {

  @Input() todos: string[];

  constructor() { }

  ngDoCheck(): void {
    console.log('ListComponent checked');
  }

}
