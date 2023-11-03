import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NgxsRouterPluginModule, RouterStateSerializer } from '@ngxs/router-plugin';
import { states } from './store';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { CustomRouterStateSerializer } from './store/router';
import { PluginService } from './shared/services/plugin.service';
import { RouterModule } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NotFoundComponent } from './pages/not-found/not-found.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /**
     * 路由在pluginService中初始化
     * @see PluginService.init
     * */
    RouterModule.forRoot([]),
    IconsProviderModule,
    SharedModule,
    NgxsStoragePluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([...states], {
      selectorOptions: {injectContainerState: false},
      developmentMode: !environment.production,
    }),
    NzModalModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    {
      provide: APP_INITIALIZER,
      useFactory: (s: PluginService) => () => s.init(),
      deps: [PluginService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
