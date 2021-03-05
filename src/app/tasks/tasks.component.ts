import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task';
import {EditComponent} from '../edit/edit.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  constructor(public matDialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  showModal(editTask: Task): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "edit-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    dialogConfig.data = editTask;
    const modalDialog = this.matDialog.open(EditComponent, dialogConfig);
  }

}
