const page = ({ gulp, plugins, done }) => {
  gulp.src('src/index.njk')
    .pipe( plugins.nunjucks.compile() )
    .pipe( plugins.rename('index.html') )
    .pipe( gulp.dest( 'build' ) )
    .on( 'end', done );
};

module.exports = page;
