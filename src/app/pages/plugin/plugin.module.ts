import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoadedComponent } from './loaded/loaded.component';
import { ModalComponent } from './modal/modal.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'loaded', component: LoadedComponent},
  {path: 'custom', component: CustomComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    ListComponent,
    LoadedComponent,
    ModalComponent,
    CustomComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    NzButtonModule,

    NzFormModule,
    NzInputModule,
  ],
})
export class PluginModule {
}
