import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'events', loadChildren: 'app/events/events.module#EventsModule' },
  { path: 'blog', loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'links', loadChildren: 'app/links/links.module#LinksModule' },
  { path: 'wildlings', loadChildren: 'app/wildlings/wildlings.module#WildlingsModule' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: '**', loadChildren: 'app/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
        // preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
