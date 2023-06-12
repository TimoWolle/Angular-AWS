import {Component, Input, OnInit} from '@angular/core';
import {todo} from '../../entity/todo'

@Component({
  selector: 'todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit{

  @Input() todo!: todo

  constructor() {
  }

  ngOnInit() {
  }
}
