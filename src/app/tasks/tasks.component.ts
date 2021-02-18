import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {StatusTask} from '../models/statusTask';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  constructor() { }

  ngOnInit(): void {
  }

}
