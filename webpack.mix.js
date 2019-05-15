const mix             = require('laravel-mix');
const imageMin        = require('laravel-mix-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

mix.js('src/js/main.js', 'dist/js')
  .less('src/less/style.less', 'dist/css').options({
    processCssUrls: false
  })
  .imagemin(
    'img/**.*',
    {
      context: 'src',
    },
    {
      optipng: {
        optimizationLevel: 5
      },
      jpegtran: null,
      plugins: [
        imageminMozjpeg({
          quality: 100,
          progressive: true,
        }),
      ],
    }
  )
  .copyDirectory('src/font', 'dist/font')
  .copyDirectory('src/ico', 'dist/ico')
  .copy('node_modules/jquery/dist/jquery.min.js', 'dist/vendors/jquery.min.js')
  .browserSync( {
    proxy : 'ponor.test',
    files : [
      'src/**/*',
      'index.html',
    ]
  } );;
