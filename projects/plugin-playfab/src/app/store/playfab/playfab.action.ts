export namespace PlayfabAction {
  export class ChangeId {
    static readonly type = `修改id`;

    constructor(public id: number) {
    }
  }
}
