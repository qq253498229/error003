const {shareAll, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'plugin-playfab',

  exposes: {
    './Component': './projects/plugin-playfab/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },

});
