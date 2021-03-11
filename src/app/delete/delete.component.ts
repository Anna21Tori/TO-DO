import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Task} from '../models/task';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  task: Task = null;
  constructor(public dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data: Task) {
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
