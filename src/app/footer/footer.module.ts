import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
