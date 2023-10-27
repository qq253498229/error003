import { Selector } from '@ngxs/store';
import { PluginState, PluginStateModel } from './plugin.state';
import * as _ from 'lodash';
import * as immutable from 'object-path-immutable';

export class PluginSelector {
  @Selector([PluginState])
  static list({list, loaded}: PluginStateModel) {
    return _.map(list, s => immutable.set(s, ['loaded'], !!loaded[s.path]));
  }

  @Selector([PluginState])
  static loaded({loaded}: PluginStateModel) {
    return loaded;
  }

  @Selector([PluginState])
  static loadedKeys({loaded}: PluginStateModel) {
    return Object.keys(loaded);
  }

  @Selector([PluginState])
  static loadedList({loaded}: PluginStateModel) {
    return Object.keys(loaded).map(s => loaded[s]);
  }

  @Selector([PluginState])
  static pluginMenu({loaded}: PluginStateModel) {
    let hasMenuPlugin = Object.keys(loaded).filter((s: any) => !!loaded[s].menu).map(s => loaded[s].menu);
    return _.flattenDeep(hasMenuPlugin);
  }
}
