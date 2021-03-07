import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {HttpTasksService} from '../services/http-tasks.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() numPending: number;
  @Output() idTask = new EventEmitter<number>();
  constructor(private http: HttpTasksService) { }

  ngOnInit(): void {
  }

  clearAll(): void{
    this.http.deleteAllTasks().subscribe(
      () => {
        this.idTask.emit(-1);
      }
    );
  }
}
