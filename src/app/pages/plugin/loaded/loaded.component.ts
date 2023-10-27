import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';
import { PluginSelector } from '../../../store/plugin/plugin.selector';
import { PluginAction } from '../../../store/plugin/plugin.action';

@Component({
  selector: 'app-loaded',
  templateUrl: './loaded.component.html',
  styleUrls: ['./loaded.component.scss'],
})
export class LoadedComponent {
  @AutoUnsubscribe() loadedList$ = this.store.select(PluginSelector.loadedList);

  constructor(private store: Store) {
  }

  unload(data: any) {
    this.store.dispatch(new PluginAction.Unload(data));
  }
}
