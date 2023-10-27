const {share, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

let fed = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:3000/remoteEntry.js",
  },

  shared: share({
    '@angular/core': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@angular/common': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@angular/common/http': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@angular/router': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@angular/cdk': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@ngxs/store': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@ngxs/router-plugin': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@ngxs/storage-plugin': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    '@ngxs/form-plugin': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    'ng-zorro-antd': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    'lodash': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    'object-path-immutable': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
    'ngx-auto-unsubscribe-decorator': {singleton: true, strictVersion: true, requiredVersion: 'auto',},
  }),

  sharedMappings: [],

});

module.exports = {
  ...fed,
  output: {
    uniqueName: "dashboard",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
}
