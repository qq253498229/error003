import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { PlayfabAction } from './playfab.action';

export interface PlayfabStateModel {
  id: number;
  form?: any;
}

@State<PlayfabStateModel>({
  name: 'playfab',
  defaults: {
    id: 1,
  },
})
@Injectable({
  providedIn: 'root',
})
export class PlayfabState {
  @Action(PlayfabAction.ChangeId)
  changeId(ctx: StateContext<PlayfabStateModel>, data: PlayfabAction.ChangeId) {
    ctx.patchState({
      id: data.id,
    });
  }
}
