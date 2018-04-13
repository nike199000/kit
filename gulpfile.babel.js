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
gulp.task( 'watch', getTask('watch') );
gulp.task( 'build', gulp.series( 'clean', 'styles' ) );

gulp.task( 'page', getTask( 'page' ) );

gulp.task( 'dev-server', gulp.series(
  'build', 'page', 'watch', getTask( 'dev-server' )
));
