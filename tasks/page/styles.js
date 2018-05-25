const SASS_CONFIG = {
  includePaths: [
    'node_modules/'
  ],
  outputStyle: 'expanded'
};

const AUTOPREFIXER_CONFIG = {
  browsers: ['last 2 versions'],
  cascade: false
};

const fileRename = ( path ) => {
  path.basename = 'style';
};

const styles = ({ gulp, plugins, done }) => {
  gulp.src('page/styles/index.scss')
    .pipe( plugins.sass( SASS_CONFIG ).on( 'error', plugins.sass.logError ) )
    .pipe( plugins.autoprefixer( AUTOPREFIXER_CONFIG ))
    .pipe( plugins.rename( fileRename ) )
    .pipe( gulp.dest( 'build' ) )
    .on( 'end', done );
};

module.exports = styles;
