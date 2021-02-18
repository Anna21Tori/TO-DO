import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';
import {StatusTask} from '../models/statusTask';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newTask = new EventEmitter<Task>();
  taskTitle = '';
  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(): any{
    const task: Task = {title: this.taskTitle, date: new Date(), status: StatusTask.PENDING};
    this.newTask.emit(task);
    this.taskTitle = '';
  }
}
