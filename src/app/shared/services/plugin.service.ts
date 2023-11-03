import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NzModalRef } from 'ng-zorro-antd/modal/modal-ref';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

@Injectable({
  providedIn: 'root',
})
export class PluginService {
  loaded: any;
  modalRef?: NzModalRef;

  constructor(
      private router: Router,
      private http: HttpClient,
  ) {
  }

  loadList() {
    return this.http.get(`/assets/plugin-list.json`);
  }

  init() {
    return this.loadList().pipe(tap((r: any) => {
      let loadedPlugins = r.filter((s: any) => s.path in this.loaded);
      //初始化路由
      this.initRouter(loadedPlugins);
    }));
  }

  initRouter(loadedPlugins: any) {
    let pluginRouterList = loadedPlugins.map((s: any) => {
      return {
        path: `plugin/${s.path}`,
        loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: environment.production ? s['remoteEntry'] : s['remoteEntryDev'],
          exposedModule: s.exposedModule,
        }).then(m => m[s['moduleName']]),
      };
    });

    const routes: Routes = [
      {path: '', pathMatch: 'full', redirectTo: '/welcome'},
      {
        path: 'welcome',
        loadChildren: () => import('src/app/pages/welcome/welcome.module').then(m => m.WelcomeModule),
      },
      {path: 'plugin', loadChildren: () => import('src/app/pages/plugin/plugin.module').then(m => m.PluginModule)},
      ...pluginRouterList,
      {path: '**', component: NotFoundComponent},
    ];

    this.router.resetConfig(routes);
  }

  openModal(modalRef: any) {
    this.modalRef = modalRef;
  }

  closeModal() {
    this.modalRef?.destroy();
  }
}
