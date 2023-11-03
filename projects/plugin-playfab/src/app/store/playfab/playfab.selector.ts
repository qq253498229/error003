import { Selector } from '@ngxs/store';
import { PlayfabState, PlayfabStateModel } from './playfab.state';

export class PlayfabSelector {
  @Selector([PlayfabState])
  static id({id}: PlayfabStateModel) {
    return id;
  }
}
