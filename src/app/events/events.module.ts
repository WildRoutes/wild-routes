import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsComponent } from './events.component';

const eventsRoutes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: EventsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(eventsRoutes)
  ],
  declarations: [EventsComponent, EventsListComponent],
  exports: [RouterModule]
})
export class EventsModule { }
