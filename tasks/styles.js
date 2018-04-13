const SASS_CONFIG = {
  includePaths: [
    'node_modules/'
  ],
  outputStyle: 'compressed'
};

const fileRename = ( path ) => {
  path.basename = 'style';
};

const styles = ({ gulp, plugins, done }) => {
  gulp.src('src/styles/index.scss')
    .pipe( plugins.sass( SASS_CONFIG ).on( 'error', plugins.sass.logError ) )
    .pipe( plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe( plugins.rename( fileRename ) )
    .pipe( gulp.dest( 'build' ) )
    .on( 'end', done );
};

module.exports = styles;
