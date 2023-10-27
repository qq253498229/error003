import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';
import { PluginAction } from './plugin.action';
import * as immutable from 'object-path-immutable';
import { PluginService } from '../../shared/services/plugin.service';
import { tap } from 'rxjs';

export interface PluginStateModel {
  list: any[],
  loaded: {
    [key: string]: any
  };
}

@State<PluginStateModel>({
  name: 'plugin',
  defaults: {
    list: [],
    loaded: {},
  },
})
@Injectable({
  providedIn: 'root',
})
export class PluginState implements NgxsOnInit {


  constructor(
      private pluginService: PluginService,
  ) {
  }

  /**
   * 初始化插件
   */
  ngxsOnInit(ctx: StateContext<any>): void {
    this.pluginService.loaded = ctx.getState().loaded;
  }

  @Action(PluginAction.LoadList)
  LoadList(ctx: StateContext<PluginStateModel>) {
    return this.pluginService.loadList().pipe(tap((r: any) => {
      ctx.patchState({list: r});
    }));
  }

  @Action(PluginAction.Load)
  Load(ctx: StateContext<PluginStateModel>, {data}: PluginAction.Load) {
    let state = ctx.getState();
    let newState = immutable.set(state, ['loaded', data.path], data);
    ctx.setState(newState);
    this.pluginService.loaded = ctx.getState().loaded;
    return this.pluginService.init();
  }

  @Action(PluginAction.Unload)
  Unload(ctx: StateContext<PluginStateModel>, {data}: PluginAction.Unload) {
    let state = ctx.getState();
    let newState = immutable.del(state, ['loaded', data.path]);
    ctx.setState(newState);
    this.pluginService.loaded = ctx.getState().loaded;
    return this.pluginService.init();
  }
}
