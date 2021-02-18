import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Task} from './models/task';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  config: { [key: string]: string | Date } = null;
  tasks: Task[];
  private subscriptions = new Subscription();
  constructor(private http: DataService) {
  }

  ngOnInit(): void {

    this.config = {
      title: 'to-do list',
      footer: ' All rights reserved.',
      date: new Date()
    };

    const sub = this.http.behaviorSubject.subscribe(
      (data: Task[]) => {
        this.tasks = data;
      },
      error => console.error(error),
      () => console.log('Complete!')
    );
    this.subscriptions.add(sub);
  }
  addNewTask(task: Task): void{
    this.http.addTask(task);
  }
}
