import { Component, OnDestroy } from '@angular/core';
import todo from './todo';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { NotificationsService } from '../notifications.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy {
  list: todo[] = [];
  todo: todo = {
    task: '',
    id: 1,
    isOver: false,
    time: '0',
    deadline: '12:00',
  };
  index = 1;
  task = new FormControl<string>('');
  date = new Date();
  deadline = new FormControl<string>('');
  constructor(public auth: AuthService, public noti: NotificationsService) {}

  name = this.auth.name;
  ngOnDestroy() {
    this.list.forEach((todo) => {
      if (todo.timerSubscription) {
        todo.timerSubscription.unsubscribe();
      }
    });
  }

  add() {
    
    if (
      this.task.value != null &&
      this.task.value.length != 0 &&
      this.deadline.value
    ) {
      this.todo = {
        id: this.index++,
        task: this.task.value,
        isOver: false,
        time: new Date().toTimeString().substring(0, 5),
        deadline: this.deadline.value,
      };
      console.log(this.deadline.value);
      console.log(this.todo.time)
      this.list.push(this.todo);
      this.startTaskTimer(this.todo);
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

  startTaskTimer(task: todo) {
    const deadline = this.timeDifferenceInSeconds(task.time, task.deadline);
    task.timerSubscription = interval(1000)
      .pipe(take(deadline))
      .subscribe({
        next: (val) => {
          // Notify the user if val reaches 59 (0-based index)
          if (val === deadline-1) {
            this.notify(task);
          }
        },
        complete: () => {
          // Unsubscribe when the timer completes
          task.timerSubscription?.unsubscribe();
        },
      });
  }
  
  timeDifferenceInSeconds(time1: string, time2: string) {
    // Split the time strings into hours and minutes
    const [hours1, minutes1] = time1.split(':').map(Number);
    const [hours2, minutes2] = time2.split(':').map(Number);

    // Convert both times to minutes
    const totalMinutes1 = hours1 * 60 + minutes1;
    const totalMinutes2 = hours2 * 60 + minutes2;

    // Calculate the difference in minutes
    const differenceInMinutes = Math.abs(totalMinutes1 - totalMinutes2);

    // Convert the difference back to seconds
    const differenceInSeconds = differenceInMinutes * 60;

    return differenceInSeconds;
  }
  notify(task: todo) {
    const taska = this.list.find((task) => task.id === task.id);
    if (!task.isOver && taska) {
      this.noti.notificationList.push(task);
    }

    // alert(`Task "${task.task}" has reached 1 minute!`);
  }
}
