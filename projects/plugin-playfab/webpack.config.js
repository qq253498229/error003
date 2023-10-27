const {shareAll, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'plugin-playfab',

  exposes: {
    './PlayfabModule': './projects/plugin-playfab/src/app/modules/playfab/playfab.module.ts',
  },

  shared: {
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },

});
