import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoadedComponent } from './loaded/loaded.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'loaded', component: LoadedComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    ListComponent,
    LoadedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
  ],
})
export class PluginModule {
}
