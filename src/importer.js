const NODE_TYPES  = require('node-sass').types;
const CACHED_URL  = new Set();
const MEDIA_TYPES = /^(font|svg)\//;

function router(url, done) {
  const type = url.split('/').shift();

  switch(type) {
    case 'font':
      const fontUrl    = 'https://fonts.googleapis.com/css';
      const fontFamily = url.split('/').pop();
      const fontFace   = `
        @import url('${fontUrl}?family=${fontFamily}&display=swap');
      `;

      done({ contents: fontFace });
    break;
  }
}

module.exports = function (url, prev, done) {
  if (CACHED_URL.has(url)) {
    return { url: '' };
  } else if (MEDIA_TYPES.test(url)) {
    CACHED_URL.add(url);
    router(url, done);
  } else {
    return null;
  }
};
