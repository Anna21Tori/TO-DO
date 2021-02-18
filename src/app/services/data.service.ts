import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { BehaviorSubject, Observer, Subject } from 'rxjs';
import {DataBase} from './dataBase';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  behaviorSubject = new BehaviorSubject<Task[]>([]);

  constructor(private dataBaseService: DataBase) {
    this.init();
  }

  addTask(task: Task): void{
    this.dataBaseService.addTask(task).subscribe(this.observer());
  }

  private init(): void {
    this.dataBaseService.fetchTasks().subscribe(this.observer());
  }

  private observer(): Observer<Task[]>{
    return {
      next: (tasks: Task[]) => {
        this.behaviorSubject.next(tasks);
      },
      error: error => console.error(error),
      complete: () => console.log('Complete!')
    };
  }
}
