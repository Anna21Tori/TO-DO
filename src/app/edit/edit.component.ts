import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Task} from '../models/task';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

declare var $: any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

  taskTitle = '';
  constructor(public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.taskTitle = this.data.title;
    console.log(this.taskTitle, this.data);
  }

  ngOnInit() {
  }

  // When the user clicks the action button a.k.a. the logout button in the\
  // modal, show an alert and followed by the closing of the modal
  actionFunction() {
    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}
