import {Injectable} from '@angular/core';

import {Task} from '../models/task';
import {Observable, of} from 'rxjs';
import {StatusTask} from '../models/statusTask';

@Injectable({
  providedIn: 'root',
})
export class DataBase {
  private tasks: Task[] = [
    {title: 'Znaleźć praktyki/staż!!!!', date: new Date(), status: StatusTask.PENDING},
    {title: 'Błagać o praktyki/staż!!!!', date: new Date(), status: StatusTask.PENDING},
  ];
  constructor() {}

  fetchTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): Observable<Task[]> {
    this.tasks.push(task);
    return of(this.tasks);
  }
}
