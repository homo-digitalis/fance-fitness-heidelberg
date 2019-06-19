import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fance-fitness-angular';
  day: Observable<string>;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      switch (queryParams.day) {
        case 'monday': window.open('https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq');
          break;
        case 'tuesday': window.open('https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To');
          break;
        case 'wednesday':
          console.log("hmmmmmm")
          //window.open('https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4');
          //this.router.navigate(['https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4'])
          document.location.href = 'https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4';

          break;
        case 'thursday': window.open('https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr');
          break;
        case 'friday': window.open('https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8');
          break;
        case 'saturday': window.open('https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp');
          break;
        case 'sunday': window.open('https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol');
          break;
      }
      console.log(queryParams.day);
    });
  }
}


// http://localhost:4200/whatsapp?day=monday
