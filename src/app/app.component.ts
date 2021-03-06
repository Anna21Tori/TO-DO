import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Task} from './models/task';
import {HttpTasksService} from './services/http-tasks.service';
import {StatusTask} from './models/statusTask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config: { [key: string]: string | Date } = null;
  tasks: Task[];
  constructor(private http: HttpTasksService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    this.config = {
      title: 'to-do list',
      footer: ' All rights reserved.',
      date: new Date()
    };
    this.http.getTasks()
      .subscribe((data: Task[]) => {
        this.tasks = data;
        this.filterTask();
      }
    );
  }
  addNewTask(task: Task): void{
    this.http.addTask(task).subscribe((data: Task) => {
      this.tasks.push(data);
      this.filterTask();
    }
    );
  }
  deleteTask(id: number): void{
    this.tasks = this.tasks.filter((item) => {
      return item.id !== id ? item : null;
    });
  }
  filterTask(): void{
    const pendingTask = this.tasks.filter((item) => {
      return StatusTask[item.status.toString()] === 0 ? item : null;
    });

    const doneTask = this.tasks.filter((item) => {
      return StatusTask[item.status.toString()] === 2 ? item : null;
    });
    this.tasks = [... pendingTask, ... doneTask];

  }
  update(task: Task): void{
    this.tasks = this.tasks.filter((item) => {
      return task.id !== item.id ? item : null;
    });
    this.tasks.push(task);
    this.filterTask();
  }
}
