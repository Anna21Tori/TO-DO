import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PriorityModel} from '../models/priorityModel';
import {StatusTask} from '../models/statusTask';
import {PriorityStatus} from '../models/priorityStatus';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

  task: Task;
  priorityStatus;
  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: Task, public fb: FormBuilder) {
  }

  ngOnInit(){
    this.task = this.data;
    this.priorityStatus = this.fb.group({
      priority: [this.task.priority]
    });
  }

  save() {
    this.task.priority = this.priorityStatus.get('priority').value;
    this.dialogRef.close(this.task);
  }

  close() {
    this.dialogRef.close();
  }

  isChecked(opt: PriorityStatus, i: number): boolean{
    return PriorityStatus[opt.toString()] === i;
  }
}
