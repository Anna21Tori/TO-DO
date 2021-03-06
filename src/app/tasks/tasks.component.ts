import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';
import {EditComponent} from '../edit/edit.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {StatusTask} from '../models/statusTask';
import {HttpTasksService} from '../services/http-tasks.service';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() idTask = new EventEmitter<number>();
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
        editTask.title = data;
        this.http.updateTask(editTask).subscribe(
          item => console.log(item)
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
    dialogConfig.height = '200px';
    dialogConfig.width = '200px';
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

  done(): void {

  }

}
