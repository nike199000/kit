import gulp from 'gulp';
import del from 'del';
import path from 'path';
import fs from 'fs';
import gulpLoadPlugins from 'gulp-load-plugins';

const plugins = gulpLoadPlugins();

const getTask = ( taskName ) => {
  return ( done ) => require( path.join( __dirname, 'tasks', taskName ) )({ gulp, plugins, done });
};


gulp.task( 'default', done => done() );

gulp.task( 'styles', getTask( 'styles' ) );

gulp.task( 'clean', del.bind( null, ['build'] ) );
gulp.task( 'build', gulp.series( 'clean', 'styles' ) );
gulp.task( 'watch', getTask('watch') );

gulp.task( 'page-styles', getTask( 'page/styles' ) );
gulp.task( 'page-views', getTask( 'page/views' ) );
gulp.task( 'page', gulp.series( 'page-views', 'page-styles' ) );

gulp.task( 'dev-server', gulp.series(
  'build', 'page', 'watch', getTask( 'dev-server' )
));
