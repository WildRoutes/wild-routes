import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WildlingsListComponent } from './wildlings-list/wildlings-list.component';
import { WildlingsComponent } from './wildlings.component';

const wildlingsRoutes: Routes = [
  {
    path: '',
    component: WildlingsComponent,
    children: [
      {
        path: '',
        component: WildlingsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(wildlingsRoutes)
  ],
  declarations: [WildlingsComponent, WildlingsListComponent],
  exports: [RouterModule]
})
export class WildlingsModule { }
