import {Component, Input, OnInit} from '@angular/core';
import {todo} from '../../entity/todo'
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'todo',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit{

  @Input() todo!: todo

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private todoService: TodoService

  ) {}

  ngOnInit(): void {
    this.getToDos();
  }

  getToDos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getToDo(id)
      .subscribe(todo => this.todo = todo);
  }

  goBack(): void {
    this.location.back()
  }
}
