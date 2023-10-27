import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { PluginAction } from '../../../store/plugin/plugin.action';
import { PluginSelector } from '../../../store/plugin/plugin.selector';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe-decorator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @AutoUnsubscribe() list$ = this.store.select(PluginSelector.list);

  constructor(
      private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new PluginAction.LoadList());
  }

  load(data: any) {
    this.store.dispatch(new PluginAction.Load(data));
  }

  unload(data: any) {
    this.store.dispatch(new PluginAction.Unload(data));
  }
}
