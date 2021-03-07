import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';
import {StatusTask} from '../models/statusTask';
import {DatePipe} from '@angular/common';
import {PriorityStatus} from '../models/priorityStatus';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newTask = new EventEmitter<Task>();
  model: Partial<Task> = {
    title: ''
  };
  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {

  }
  addNewTask(): any{
    const task: Task = {title: this.model.title, date: this.datePipe.transform(this.model.date, 'yyyy-MM-dd'), status: StatusTask.PENDING, priority: PriorityStatus.NONE};
    this.newTask.emit(task);
    this.model = {
      title: '',
      date: ''
    };
  }
}
