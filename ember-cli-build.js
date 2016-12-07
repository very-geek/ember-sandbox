const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = process.env.EMBER_ENV === 'production';
const isDevelopment = process.env.EMBER_ENV === 'development';
const postcssOptions = {
  rucksack: { alias: false, hexRGBA: false, fallbacks: true },
  cssnano: {
    autoprefixer: false,
    core: isProduction,
    discardComments: isProduction,
    mergeIdents: false,
    reduceIdents: false,
    sourcemap: isDevelopment
  },
  reporter: { plugins: ['postcss-browser-reporter'] }
};

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    storeConfigInMeta: false,
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-cssnext'),
        require('postcss-fallback'),
        require('rucksack-css')(postcssOptions.rucksack),
        require('cssnano')(postcssOptions.cssnano),
        require('postcss-reporter')(postcssOptions.reporter),
        require('postcss-browser-reporter')
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
          'ui-blue-gray': '#607d8b'
        }
      }
    },
    nodeAssets: {
      hack: {
        srcDir: 'dist',
        import: {
          include: [
            { path: 'hack.css', prepend: true },
            { path: 'standard.css' }
          ]
        }
      }
    }
  });

  return app.toTree();
};
