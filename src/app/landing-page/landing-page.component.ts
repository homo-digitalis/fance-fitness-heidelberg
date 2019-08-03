import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title = 'fance-fitness-angular';
  day: Observable<string>;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  public ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      switch (queryParams.day) {
        case 'monday':
          document.location.href = 'https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq';
          break;
        case 'tuesday':
          document.location.href = 'https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To';
          break;
        case 'wednesday':
          document.location.href = 'https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4';
          break;
        case 'thursday':
          document.location.href = 'https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr';
          break;
        case 'friday':
          document.location.href = 'https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8';
          break;
        case 'saturday':
          document.location.href = 'https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp';
          break;
        case 'sunday':
          document.location.href = 'https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol';
          break;
      }
      console.log(queryParams.day);
    });
  }

  public clickContact() {
    this.router.navigateByUrl('contact');
  }
}


// http://localhost:4200/whatsapp?day=monday
