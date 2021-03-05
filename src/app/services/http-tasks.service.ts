import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../models/task';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpTasksService {

  private url = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.url + '/task')
      .pipe(tap(console.log));
  }
  addTask(task: Task): void{
    this.http.post(this.url + '/task', task);
  }
}
