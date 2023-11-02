import { Component } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';
import { Store } from '@ngxs/store';
import { PluginSelector } from '../../../store/plugin/plugin.selector';
import { PluginAction } from '../../../store/plugin/plugin.action';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  @AutoUnsubscribe() custom$ = this.store.select(PluginSelector.custom);

  constructor(private store: Store) {
  }

  load(data: any) {
    this.store.dispatch(new PluginAction.Load(data));
  }

  unload(data: any) {
    this.store.dispatch(new PluginAction.Unload(data));
  }

  openPluginModal() {
    this.store.dispatch(new PluginAction.OpenPluginModal());
  }
}
