import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class HomeModule { }
