import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  task: Task = null;
  constructor(public dialogRef: MatDialogRef<DoneComponent>, @Inject(MAT_DIALOG_DATA) public data: Task) {
  }

  ngOnInit() {
    this.task = this.data;
  }

  consent(): void{
    this.dialogRef.close(true);
  }

  refusal(): void {
    this.dialogRef.close(false);
  }
}
