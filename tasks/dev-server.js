const devServer = ({ gulp, plugins, done }) => {
  plugins.connect.server({
    name: 'Kit',
    root: 'build',
    port: 1234
  });

  done();
};

module.exports = devServer;
