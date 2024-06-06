import { Injectable } from '@angular/core';
import todo from './home/todo';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  notificationList :todo[] = [];
  constructor() { }
}
