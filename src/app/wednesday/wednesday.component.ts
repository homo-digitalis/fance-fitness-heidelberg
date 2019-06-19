import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wednesday',
  templateUrl: './wednesday.component.html',
  styleUrls: ['./wednesday.component.css']
})
export class WednesdayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open('https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4');
  }

}
