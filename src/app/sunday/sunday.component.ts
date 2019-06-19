import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sunday',
  templateUrl: './sunday.component.html',
  styleUrls: ['./sunday.component.css']
})
export class SundayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open('https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol');
  }

}
