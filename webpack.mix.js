const mix = require('laravel-mix');
require('mix-tailwindcss');

/*
|
| Laravel Mix documentation can be found at https://laravel-mix.com/.
| https://laravel-mix.com/docs/6.0/browsersync
| https://laravel-mix.com/docs/6.0/api
|
| Watch: `npm run watch`
| Production: `npm run prod`
|
*/

// Options
let setPub = 'dist';
mix.setPublicPath(setPub);

// Front-end
mix.js('src/core.js', 'dist');

mix.sass('src/core.scss', 'dist')
        .tailwind();


// Version
if (mix.inProduction()) {
    mix.version();
}
// BrowserSync
mix.browserSync({
    // proxy: 'https://local.site',
});
mix.options({
    processCssUrls: false
});
mix.webpackConfig({
stats: {
    children: true,
},});