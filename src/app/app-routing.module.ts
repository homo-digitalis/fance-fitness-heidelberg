import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MondayComponent } from './monday/monday.component';
import { AppComponent } from './app.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';

const routes: Routes = [
  {
    path: 'monday',
    component: MondayComponent
  },
  {
    path: 'tuesday',
    component: TuesdayComponent
  },
  {
    path: 'wednesday',
    component: WednesdayComponent
  },
  {
    path: 'thursday',
    component: ThursdayComponent
  },
  {
    path: 'friday',
    component: FridayComponent
  },
  {
    path: 'saturday',
    component: SaturdayComponent
  },
  {
    path: 'sunday',
    component: SundayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
