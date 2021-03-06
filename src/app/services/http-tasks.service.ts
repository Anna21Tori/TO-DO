import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Task} from '../models/task';
import {catchError, concatAll, first, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpTasksService {

 //private url = 'http://localhost:4000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json; charset=UTF-8',
    })
  }
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>('api/task').pipe(tap(console.log));
  }
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task[]>(`api/task`, task, this.httpOptions).pipe(
      concatAll(),
      first()
    );
  }
  updateTask(task: Task): Observable<Task>{
    return this.http.put<Task[]>(`api/task/${task.id}`, task, this.httpOptions).pipe(
      concatAll(),
      first()
    );
  }
  deleteTask(id: number): Observable<{}>{
    return this.http.delete(`api/task/${id}`, this.httpOptions);
  }
  changeStatusFromPendingToDone(task: Task): Observable<Task>{
    return this.http.put<Task[]>(`api/task/${task.id}/done`, task, this.httpOptions).pipe(
      concatAll(),
      first()
    );
  }
}
