import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MondayComponent } from './monday/monday.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';

@NgModule({
  declarations: [
    AppComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
