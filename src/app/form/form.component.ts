import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';
import {StatusTask} from '../models/statusTask';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newTask = new EventEmitter<Task>();
  taskTitle = '';
  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  addNewTask(): any{
    const date = new Date()
    const task: Task = {title: this.taskTitle, date: this.datePipe.transform(date, 'yyyy-MM-dd'), status: StatusTask.PENDING};
    this.newTask.emit(task);
    this.taskTitle = '';
  }
}
