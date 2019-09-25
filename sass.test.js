const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');
const sass = require('sass');

describe('SASS', () => {
  const sassFiles = glob.sync(
    path.resolve(__dirname, 'src/**/__tests__/*.s(a|c)ss')
  );

  for (let sassFile of sassFiles) {
    sassTrue.runSass({ file: sassFile }, { describe, it })
  }
});
