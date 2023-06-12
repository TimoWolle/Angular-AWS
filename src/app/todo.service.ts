import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {todo} from "./entity/todo";
import {todos} from "../todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getToDos(): todo[] {
    return todos;
  }

  getToDo(id: number): todo {
    return todos.find(h => h.id === id)!;
  }

  getToDoById(id: number): Observable<todo>{
    const todo = todos.find(h => h.id === id)!;
    return of(todo);
  }

  deleteToDoById(id: number){
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
    }
  }

  saveTodoToTodos(todo: any) {
    if (todo.id>0) {
      // Wenn das Todo bereits eine ID hat, aktualisiere es in der Liste
      const index = todos.findIndex(existingTodo => existingTodo.id === todo.id);
      if (index !== -1) {
        todos[index] = todo;
      }
    } else {
      // Wenn das Todo keine ID hat, generiere eine neue ID und füge es der Liste hinzu
      todo.id = this.generateUniqueId();
      todos.push(todo);
    }
  }
  private generateUniqueId(): number {
    const highestId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id || 0), 0);
    return highestId + 1;
  }

  addTodoToTodos(todo: any) {
    todos.push(todo);
  }

  updateTodoInTodos(updatedTodo: any) {
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      todos[index] = updatedTodo;
    }
  }
}
