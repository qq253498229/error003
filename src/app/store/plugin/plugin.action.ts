export namespace PluginAction {
  export class LoadList {
    static readonly type = `加载列表`;
  }

  export class Load {
    static readonly type = `加载插件`;

    constructor(public data: any) {
    }
  }

  export class Unload {
    static readonly type = `卸载插件`;

    constructor(public data: any) {
    }
  }
}
