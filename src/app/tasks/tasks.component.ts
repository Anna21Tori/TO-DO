import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';
import {EditComponent} from '../edit/edit.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {StatusTask} from '../models/statusTask';
import {HttpTasksService} from '../services/http-tasks.service';
import {DeleteComponent} from '../delete/delete.component';
import {DoneComponent} from '../done/done.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() idTask = new EventEmitter<number>();
  @Output() updateTask = new EventEmitter<Task>();
  constructor(public matDialog: MatDialog, private http: HttpTasksService) {

  }

  ngOnInit(): void {
  }

  edit(editTask: Task): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'edit-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = editTask;
    const modalDialog = this.matDialog.open(EditComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        this.http.updateTask(editTask).subscribe(
          item => this.updateTask.emit(item)
        );
      }
    );
  }
  isPending(status: StatusTask): boolean{
    return StatusTask[status.toString()] === 0 ;
  }

  delete(deleteTask: Task): void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'delete-component';
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';
    dialogConfig.data = deleteTask;
    const modalDialog = this.matDialog.open(DeleteComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        if (data){
          this.http.deleteTask(deleteTask.id).subscribe(
            () => this.idTask.emit(deleteTask.id)
          );
        }
      }
    );
  }

  done(doneTask: Task): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'delete-component';
    dialogConfig.height = '300px';
    dialogConfig.width = '300px';
    dialogConfig.data = doneTask;
    const modalDialog = this.matDialog.open(DoneComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(
      data => {
        if (data){
          this.http.changeStatusFromPendingToDone(doneTask).subscribe(
            item => this.updateTask.emit(item)
          );
        }
      }
    );
  }

}
