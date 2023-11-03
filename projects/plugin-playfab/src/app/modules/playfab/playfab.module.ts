import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayfabComponent } from './playfab/playfab.component';
import { NgxsModule } from '@ngxs/store';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { PlayfabState } from '../../store/playfab/playfab.state';

const routes: Routes = [
  {path: '', component: PlayfabComponent},
];

@NgModule({
  declarations: [
    PlayfabComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxsModule.forFeature([
      PlayfabState,
    ]),
    NgxsFormPluginModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
  ],
})
export class PlayfabModule {
}
