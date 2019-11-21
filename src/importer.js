const CACHED_URL  = new Set();
const MEDIA_TYPES = /^(fonts)\//;
const FONT_SYSTEM = `
  body {
    font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

const FONT_IMPORT = `
  @import url('fontUrl?family=fontFamily&display=swap');
`;

function router(url, done) {
  const urlMatch = url.match(MEDIA_TYPES).input;

  if (/^fonts\/system/.test(urlMatch)) {
    done({ contents: FONT_SYSTEM });
  }
  else if (/^fonts\//.test(urlMatch)) {
    const contents = FONT_IMPORT
      .replace('fontUrl', 'https://fonts.googleapis.com/css')
      .replace('fontFamily', url.split('/').pop());

    done({ contents });
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
