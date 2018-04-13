const watch = ({ gulp, plugins, done }) => {
  gulp.watch( 'src/styles/**/*.scss', gulp.series('styles') );
  gulp.watch( 'src/{index,page/*}.njk', gulp.series('page') );

  done();
};

module.exports = watch;
