import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayfabComponent } from './playfab/playfab.component';

const routes: Routes = [
  {path: '', component: PlayfabComponent},
];

@NgModule({
  declarations: [
    PlayfabComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PlayfabModule {
}
