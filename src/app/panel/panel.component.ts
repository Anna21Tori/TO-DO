import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() numPending: number;
  constructor() { }

  ngOnInit(): void {
  }

}
