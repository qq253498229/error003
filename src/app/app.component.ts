import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';
import { PluginSelector } from './store/plugin/plugin.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  @AutoUnsubscribe() pluginMenu$ = this.store.select(PluginSelector.pluginMenu);

  constructor(private store: Store) {
  }
}
