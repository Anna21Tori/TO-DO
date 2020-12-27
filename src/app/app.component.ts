import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  config: { [key: string]: string | Date } = null;

  constructor() {
  }

  ngOnInit(): void {

    this.config = {
      title: "to-do list",
      footer: " All rights reserved.",
      date: new Date()
    };

  }
}
