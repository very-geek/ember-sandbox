const isProduction = process.env.EMBER_ENV === 'production'
const postcssOptions = {
  cssnext: {
    features: {
      browsers: '> 1%, last 3 versions, Firefox ESR, Opera 12.1, not ie <= 8',
      customProperties: { preserve: true, warnings: false },
    },
  },
  rucksack: { alias: false, hexRGBA: false, fallbacks: true },
  cssnano: {
    autoprefixer: false,
    core: isProduction,
    discardComments: isProduction,
    mergeIdents: false,
    reduceIdents: false,
    sourcemap: !isProduction,
  },
  reporter: { plugins: ['postcss-browser-reporter'] },
}
/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    cssModules: {
      plugins: [
        require('postcss-extend'),
        require('postcss-cssnext')(postcssOptions.cssnext),
        require('postcss-fallback'),
        require('rucksack-css')(postcssOptions.rucksack),
        require('cssnano')(postcssOptions.cssnano),
        require('postcss-reporter')(postcssOptions.reporter),
        require('postcss-browser-reporter'),
      ],
      virtualModules: {
        'ui-colors': {
          'ui-red': '#f44336',
          'ui-pink': '#e91e63',
          'ui-purple': '#9c27b0',
          'ui-deep-purple': '#673ab7',
          'ui-indigo': '#3f51b5',
          'ui-blue': '#2196f3',
          'ui-light-blue': '#03a9f4',
          'ui-cyan': '#00bcd4',
          'ui-teal': '#009688',
          'ui-green': '#4caf50',
          'ui-light-green': '#8bc34a',
          'ui-lime': '#cddc39',
          'ui-yellow': '#ffeb3b',
          'ui-amber': '#ffc107',
          'ui-orange': '#ff9800',
          'ui-deep-orange': '#ff5722',
          'ui-brown': '#795548',
          'ui-gray': '#9e9e9e',
          'ui-blue-gray': '#607d8b',
        }
      }
    },
    nodeAssets: {
      hack: {
        srcDir: 'dist',
        import: [{ path: 'hack.css', prepend: true }, { path: 'standard.css' }],
      },
    },
  })

  return app.toTree();
};
