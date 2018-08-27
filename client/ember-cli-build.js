'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {

  let app = new EmberApp(defaults, {

    outputPaths: {
      app: {
        css: {
          app: '/assets/bundle.css'
        },
        js: '/assets/bundle.js'
      }
    },

    sassOptions: {
      includePaths: ["app"]
    }

  });

  app.import('node_modules/normalize.css/normalize.css', { prepend: true });

  return app.toTree();

};
