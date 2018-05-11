const views = ({ gulp, plugins, done }) => {
    gulp.src('page/views/index.njk')
      .pipe( plugins.nunjucks.compile() )
      .pipe( plugins.injectVersion({ prepend: '' }) )
      .pipe( plugins.rename('index.html') )
      .pipe( gulp.dest( 'build' ) )
      .on( 'end', done );
};

module.exports = views;
