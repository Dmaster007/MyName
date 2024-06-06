import { Component } from '@angular/core';
import todo from './todo';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EDIT_ICON } from '../../assets/edit';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  list: todo[] = [];
  todo: todo = {
    task: '',
    id: 1,
    isOver: false,
  };
  index = 1;
  edit_i = EDIT_ICON;
  task = new FormControl<string>('');
  date = new Date();

  constructor(public auth : AuthService){

  }

  name = this.auth.name
  add() {
    if (this.task.value != null && this.task.value.length != 0) {
      this.todo = {
        id: this.index++,
        task: this.task.value,
        isOver: false,
      };
      this.list.push(this.todo);
      this.task.reset();
    } else {
      alert('pls enter a task');
    }
  }
  editTask(id: number) {
    const foundTodo = this.list.find((task) => task.id === id);
    if (foundTodo) {
      // this.todo = foundTodo;
      if (this.task.value) {
        foundTodo.task = this.task.value;
      }
      // this.todo.isOver = !this.todo.isOver
    }
  }
  toggleTask(id: number) {
    const foundTodo = this.list.find((task) => task.id === id);
    if (foundTodo) {
      // this.todo = foundTodo;
      foundTodo.isOver = !foundTodo.isOver;
      // this.todo.isOver = !this.todo.isOver
    }
  }
  onKeyPress($event: KeyboardEvent) {
    if ($event.key === 'Enter') {
      this.add();
    }
  }
  deleteTask(id: number) {
    this.list = this.list.filter((task) => task.id !== id);
  }
}
