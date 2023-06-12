import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {todo} from "./entity/todo";
import {todos} from "../todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getToDos(): Observable<todo[]> {
    return of(todos);
  }

  getToDo(id: number): Observable<todo> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const todo = todos.find(h => h.id === id)!;
    return of(todo);
  }
}
