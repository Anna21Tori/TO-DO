import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Task} from './models/task';
import {HttpTasksService} from './services/http-tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config: { [key: string]: string | Date } = null;
  tasks: Task[];
  constructor(private http: HttpTasksService) {
  }

  ngOnInit(): void {

    this.config = {
      title: 'to-do list',
      footer: ' All rights reserved.',
      date: new Date()
    };
    this.http.getTasks()
      .subscribe((data: Task[]) => this.tasks = data
    );
  }
  addNewTask(task: Task): void{
    this.http.addTask(task).subscribe((data: Task) => this.tasks.push(data)
    );
  }
}
