import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from './tasks/tasks.component';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, DatePipe} from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { DoneComponent } from './done/done.component';
import {PanelComponent} from './panel/panel.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarHarness} from '@angular/material/progress-bar/testing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TasksComponent,
    FormComponent,
    EditComponent,
    DeleteComponent,
    DoneComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
