import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.css']
})
export class MondayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open('https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq');
  }

}
