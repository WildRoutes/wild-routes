import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LinksListComponent } from './links-list/links-list.component';
import { LinksComponent } from './links.component';

const linksRoutes: Routes = [
  {
    path: '',
    component: LinksComponent,
    children: [
      {
        path: '',
        component: LinksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(linksRoutes)
  ],
  declarations: [LinksComponent, LinksListComponent],
  exports: [RouterModule]
})
export class LinksModule { }
