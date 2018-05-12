const watch = ({ gulp, plugins, done }) => {
  // gulp.watch( 'src/styles/**/*.scss', gulp.series('styles') );
  gulp.watch( ['src/styles/**/*.scss', 'page/styles/**/*.scss'], gulp.series('page-styles') );
  gulp.watch( 'page/views/**/*.njk', gulp.series('page-views') );

  done();
};

module.exports = watch;
