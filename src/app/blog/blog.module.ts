import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';

const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [BlogComponent, BlogListComponent],
  exports: [RouterModule]
})
export class BlogModule { }
