const browserSync = require('browser-sync');

browserSync({
    server: "app/",
    files: ["app/assets/*.html", "app/styles/*.css", "app/js/*.js"]
});