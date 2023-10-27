import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PluginService {

  constructor(
      private router: Router,
  ) {
  }

  init() {
    return new Promise<void>(resolve => {
      const routes: Routes = [
        {path: '', pathMatch: 'full', redirectTo: '/welcome'},
        {
          path: 'welcome',
          loadChildren: () => import('src/app/pages/welcome/welcome.module').then(m => m.WelcomeModule),
        },
        {path: 'plugin', loadChildren: () => import('src/app/pages/plugin/plugin.module').then(m => m.PluginModule)},
      ];

      this.router.resetConfig(routes);
      resolve();
    });
  }
}
